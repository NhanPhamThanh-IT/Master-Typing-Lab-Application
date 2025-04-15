# Transformer Architecture Explained

The Transformer model, introduced in the paper "Attention Is All You Need" by Vaswani et al. (2017), revolutionized sequence-to-sequence tasks like machine translation and natural language understanding. Unlike previous models like RNNs or LSTMs that process sequences step-by-step, the Transformer relies entirely on **attention mechanisms** to draw global dependencies between input and output.

## High-Level Overview

The Transformer follows an **Encoder-Decoder** structure.

1.  **Encoder**: Maps an input sequence of symbols (e.g., words in a sentence) `(x₁, ..., xₙ)` to a sequence of continuous representations `z = (z₁, ..., zₙ)`.
2.  **Decoder**: Takes `z` and generates an output sequence `(y₁, ..., y<0xE2><0x82><0x98>)` one symbol at a time. At each step `i`, the model is auto-regressive, consuming the previously generated symbols as additional input when generating the next one.

![Transformer Architecture Diagram](https://miro.medium.com/v2/resize:fit:1400/1*hrha4WHp8g28FHu9uT24oQ.png)
*(Image Source: Vaswani et al., 2017)*

## Key Components

### 1. Input/Output Embeddings

*   **Input Embedding**: Converts input tokens (words) into vectors of a fixed dimension (`d_model`). Standard learned embedding layers are used.
*   **Output Embedding**: Similar to input embedding, converts output tokens into vectors.

### 2. Positional Encoding

Since the Transformer contains no recurrence or convolution, it needs a way to incorporate information about the relative or absolute position of tokens in the sequence.
*   Positional encodings are vectors added to the input embeddings (at the bottoms of the encoder and decoder stacks).
*   These encodings use sine and cosine functions of different frequencies:
    ```
    PE(pos, 2i)   = sin(pos / 10000^(2i / d_model))
    PE(pos, 2i+1) = cos(pos / 10000^(2i / d_model))
    ```
    where `pos` is the position and `i` is the dimension index. This allows the model to easily learn to attend by relative positions.

### 3. Multi-Head Attention

Instead of performing a single attention function, the Transformer finds it beneficial to linearly project the queries, keys, and values `h` times with different, learned linear projections. Attention is then performed in parallel on each of these projected versions. The results are concatenated and once again projected, resulting in the final values.

*   **Scaled Dot-Product Attention**: This is the core attention mechanism.
    ```
    Attention(Q, K, V) = softmax( (Q * Kᵀ) / sqrt(d_k) ) * V
    ```
    -   `Q`: Queries (a matrix representing a set of queries)
    -   `K`: Keys (a matrix representing a set of keys)
    -   `V`: Values (a matrix representing a set of values)
    -   `d_k`: Dimension of the keys. The scaling factor `sqrt(d_k)` prevents the dot products from growing too large.

*   **Multi-Head**:
    ```
    MultiHead(Q, K, V) = Concat(head₁, ..., head<0xE2><0x82><0x95>) * Wᴼ
    where headᵢ = Attention(Q * Wᵢ<0xE1><0xB5><0x83>, K * Wᵢ<0xE1><0xB5><0x81>, V * Wᵢ<0xE1><0xB5><0x9B>)
    ```
    -   `Wᵢ<0xE1><0xB5><0x83>`, `Wᵢ<0xE1><0xB5><0x81>`, `Wᵢ<0xE1><0xB5><0x9B>`: Learned projection matrices for queries, keys, and values for head `i`.
    -   `Wᴼ`: Learned projection matrix for the output.

There are three ways attention is used in the Transformer:
1.  **Encoder Self-Attention**: In the encoder, Q, K, and V all come from the output of the previous encoder layer. Each position in the encoder can attend to all positions in the previous layer of the encoder.
2.  **Decoder Masked Self-Attention**: In the decoder, Q, K, and V come from the output of the previous decoder layer. However, self-attention is modified (masked) to prevent positions from attending to subsequent positions. This ensures that the prediction for position `i` can depend only on the known outputs at positions less than `i`.
3.  **Encoder-Decoder Attention**: In the decoder, Q comes from the previous decoder layer, while K and V come from the output of the encoder. This allows every position in the decoder to attend over all positions in the input sequence.

### 4. Add & Norm (Residual Connections and Layer Normalization)

Each sub-layer (self-attention, feed-forward network) in both the encoder and decoder has a residual connection around it, followed by layer normalization.
*   **Residual Connection**: Helps prevent vanishing gradients and allows deeper networks. The output of a sub-layer is `LayerNorm(x + Sublayer(x))`, where `Sublayer(x)` is the function implemented by the sub-layer itself (e.g., Multi-Head Attention).
*   **Layer Normalization**: Stabilizes the training process by normalizing the inputs across the features for each data point independently.

### 5. Position-wise Feed-Forward Networks

In addition to attention sub-layers, each layer in the encoder and decoder contains a fully connected feed-forward network, which is applied to each position separately and identically. This consists of two linear transformations with a ReLU activation in between:
```
FFN(x) = max(0, x * W₁ + b₁) * W₂ + b₂
```
*   `W₁`, `b₁`, `W₂`, `b₂`: Learned parameters.
*   The dimensionality of input and output is `d_model`, and the inner-layer has dimensionality `d_ff` (typically larger, e.g., 2048).

### 6. Final Linear Layer and Softmax

*   The output of the decoder stack is fed into a final linear layer.
*   A softmax function is then applied to convert the linear layer's output into probabilities over the target vocabulary for the next token prediction.

## Encoder Stack

*   Consists of `N` identical layers (e.g., N=6).
*   Each layer has two sub-layers:
    1.  Multi-Head Self-Attention
    2.  Position-wise Fully Connected Feed-Forward Network
*   Residual connections and layer normalization are applied after each sub-layer.

## Decoder Stack

*   Also consists of `N` identical layers (e.g., N=6).
*   Each layer has three sub-layers:
    1.  Masked Multi-Head Self-Attention (ensures auto-regressive property)
    2.  Multi-Head Encoder-Decoder Attention (attends to encoder output)
    3.  Position-wise Fully Connected Feed-Forward Network
*   Residual connections and layer normalization are applied after each sub-layer.

## Summary

The Transformer architecture leverages attention mechanisms to process sequences in parallel, capturing long-range dependencies effectively without recurrence. Its core components include embeddings, positional encoding, multi-head attention (self-attention and encoder-decoder attention), feed-forward networks, residual connections, and layer normalization, organized within an encoder-decoder structure. This design has become foundational for many state-of-the-art models in NLP.