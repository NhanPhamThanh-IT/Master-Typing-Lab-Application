/**
 * Tính toán Words Per Minute (WPM)
 * @param {string} text - Văn bản người dùng đã nhập
 * @param {number} timeInMinutes - Thời gian đã sử dụng (phút)
 * @returns {number} - WPM
 */
export const calculateWPM = (text, timeInMinutes) => {
    if (!text || !timeInMinutes) return 0;
    const words = text.trim().split(/\s+/).length;
    return Math.round(words / timeInMinutes);
};

/**
 * Tính toán độ chính xác dựa trên số lỗi gõ
 * @param {number} totalKeystrokes - Tổng số lần nhấn phím
 * @param {number} errorCount - Số lần gõ sai
 * @returns {number} - Độ chính xác (%)
 */
export const calculateAccuracy = (totalKeystrokes, errorCount) => {
    if (!totalKeystrokes) return 100;
    const accuracy = ((totalKeystrokes - errorCount) / totalKeystrokes) * 100;
    return Math.round(accuracy);
};

/**
 * Kiểm tra xem ký tự nhập vào có đúng không
 * @param {string} inputChar - Ký tự người dùng nhập
 * @param {string} expectedChar - Ký tự mong đợi
 * @returns {boolean} - true nếu đúng, false nếu sai
 */
export const isCorrectChar = (inputChar, expectedChar) => {
    return inputChar === expectedChar;
};

/**
 * Trích xuất đoạn văn bản mẫu dựa trên cấp độ
 * @param {string} level - Cấp độ (beginner, intermediate, advanced)
 * @param {Object} textSamples - Object chứa các mẫu văn bản
 * @returns {string} - Đoạn văn bản mẫu
 */
export const getSampleText = (level, textSamples) => {
    return textSamples[level] || textSamples.beginner;
};