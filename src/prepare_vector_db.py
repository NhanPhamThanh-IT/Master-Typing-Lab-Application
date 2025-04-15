from langchain.text_splitter import RecursiveCharacterTextSplitter, CharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import GPT4AllEmbeddings

pdf_data_path = "data"
vector_db_path = "vectorstores/db_faiss"

def create_db_from_text():
    raw_text = """
    This is a sample text that will be split into smaller chunks. The text is long enough to demonstrate the splitting functionality of the RecursiveCharacterTextSplitter.
    The text contains multiple sentences and paragraphs to ensure that the splitting works correctly. The goal is to create smaller chunks of text that can be used for various purposes, such as training a language model or performing text analysis.
    The text should be split into chunks of a specified size, with the option to overlap the chunks if desired. This will allow for more flexibility in how the text is processed and analyzed.
    The splitting process should take into account the structure of the text, such as paragraphs and sentences, to ensure that the resulting chunks are coherent and meaningful."""

    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=500,
        chunk_overlap=50,
        length_function=len,
    )

    chunks = text_splitter.split_text(raw_text)

    # Embedding
    embedding = GPT4AllEmbeddings(model_file = "models/")