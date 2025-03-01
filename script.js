function submitQuiz() {
    var form = document.getElementById("quiz-form");
    var answers = {
        q1: "c", q2: "a", q4: "c", q5: "a", q6: "a", q7: "a", q8: "c", q9: "d", q10: "b",
        q11: "c", q12: "d", q13: "a", q14: "b", q15: "a", q16: "a", q17: "c", q18: "a", q19: "d", q20: "c",
        q21: "c", q22: "d", q23: "d", q24: "d", q25: "c", q26: "d", q27: "c", q28: "c", q29: "c", q30: "b", q31: "c", q32: "c",
        q33: "b", q34: "b", q35: "a", q36: "a", q37: "b", q38: "c", q39: "c", q40: "b", q41: "d", q42: "a", q43: "a",
        q44: "a", q45: "d", q46: "b", q47: "b", q48: "b", q49: "d", q50: "a", q51: "d", q52: "b", q53: "d",
        q54: "c", q55: "a", q56: "b", q57: "b", q58: "d", q59: "c", q60: "d", q61: "b", q62: "b", q63: "d",
        q64: "d", q65: "a", q66: "d", q67: "b", q68: "a", q69: "a", q70: "c", q71: "d", q72: "b", q73: "d",
        q74: "b", q75: "c", q76: "d", q77: "d", q78: "b", q79: "d", q80: "b", q81: "a", q82: "a", q83: "b",
        q84: "c", q85: "a", q86: "c", q87: "a", q88: "c", q89: "c", q90: "d", q91: "c", q92: "d", q93: "a",
        q94: "d", q95: "b", q96: "c", q97: "d", q98: "c", q99: "b", q100: "d", q101: "d", q102: "a", q103: "a",
        q104: "a", q105: "d", q106: "d", q107: "a", q108: "c", q109: "b", q110: "c", q111: "a", q112: "d", q113: "a",
        q114: "a", q115: "c", q116: "d", q117: "c", q118: "c", q119: "c", q120: "d", q121: "c", q122: "c", q123: "d",
        q124: "d", q125: "a", q126: "a", q127: "c", q128: "d", q129: "d", q130: "c", q131: "b", q132: "a", q133: "c",
        q134: "b", q135: "d", q136: "b", q137: "a", q138: "c", q139: "c", q140: "b", q141: "a", q142: "b", q143: "c",
        q144: "d", q145: "a", q146: "c", q147: "a", q148: "c", q149: "c", q150: "d", q151: "c", q152: "d", q153: "a",
        q154: "a", q155: "d", q156: "a", q157: "c", q158: "b", q159: "b", q160: "c", q161: "a", q162: "d", q163: "a",
        q164: "a", q165: "a", q166: "d", q167: "a", q168: "d", q169: "c", q170: "a", q171: "a", q172: "b", q173: "b",
        q174: "c", q175: "a", q176: "a", q177: "d", q178: "b", q179: "c", q180: "c", q181: "a", q182: "a", q183: "d",
        q184: "c", q185: "c", q186: "b", q187: "c", q188: "d", q189: "a", q190: "c", q191: "c", q192: "c", q193: "a",
        q194: "b", q195: "d", q196: "c", q197: "b", q198: "b", q199: "d", q200: "c"
    };

    var totalQuestions = 200;
    var score = 0;

    // Duyệt qua các câu hỏi
    for (var question in answers) {
        var selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        var feedbackElement = document.getElementById(`feedback-${question}`);
        var labels = form.querySelectorAll(`label[for="${question}"]`);
        
        // Reset màu chữ và feedback trước khi kiểm tra
        labels.forEach(function(label) {
            label.classList.remove("correct", "incorrect");
        });

        // Check answer and provide feedback
        if (selectedOption) {
            // Kiểm tra đáp án đúng
            if (selectedOption.value === answers[question]) {
                var correctLabel = form.querySelector(`label input[name="${question}"][value="${answers[question]}"]`).parentElement;
                correctLabel.classList.add("correct");  // Tô màu chữ xanh cho đáp án đúng
                score++;
                feedbackElement.textContent = "Đúng!";
                feedbackElement.style.color = "green";
            } else {
                // Tô đỏ cho đáp án sai và tô xanh cho đáp án đúng
                var incorrectLabel = form.querySelector(`label input[name="${question}"][value="${selectedOption.value}"]`).parentElement;
                incorrectLabel.classList.add("incorrect");
                var correctLabel = form.querySelector(`label input[name="${question}"][value="${answers[question]}"]`).parentElement;
                correctLabel.classList.add("correct");
                feedbackElement.textContent = "Sai. Bạn có thể sửa lại câu trả lời!";
                feedbackElement.style.color = "red";
            }
        } else {
            feedbackElement.textContent = "Bạn chưa chọn đáp án!";
            feedbackElement.style.color = "orange";
        }
    }

    // Disable submit button to prevent multiple submissions
    var submitButton = document.querySelector(".submit-btn");
    submitButton.textContent = `Bạn đã trả lời đúng ${score} / ${totalQuestions} câu hỏi.`;
    submitButton.disabled = true; // Disable the button after submission

    // Disable all radio buttons after submission
    form.querySelectorAll('input[type="radio"]').forEach(function(input) {
        input.disabled = true;
    });
}
function resetQuiz() {
    var form = document.getElementById("quiz-form");
    var feedbackElements = document.querySelectorAll('.feedback');
    
    // Xóa tất cả các câu trả lời đã chọn
    form.querySelectorAll('input[type="radio"]:checked').forEach(function(input) {
        input.checked = false;
    });

    // Xóa tất cả các phản hồi và làm lại màu sắc ban đầu
    feedbackElements.forEach(function(feedback) {
        feedback.textContent = "";
    });

    // Bỏ tất cả các lớp đúng / sai khỏi các nhãn
    var allLabels = form.querySelectorAll('label');
    allLabels.forEach(function(label) {
        label.classList.remove("correct", "incorrect");
    });

    // Enable lại tất cả các nút radio và nút gửi
    form.querySelectorAll('input[type="radio"]').forEach(function(input) {
        input.disabled = false;
    });

    var submitButton = document.querySelector(".submit-btn");
    submitButton.disabled = false;  // Bật lại nút submit
    submitButton.textContent = "Nộp bài";
}
