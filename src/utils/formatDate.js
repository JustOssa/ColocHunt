// Format date from db
function FormatDate(firestoreDate) {
    const date = new Date(firestoreDate);
    //const date = firestoreDate.toDate();
    if (date.getTime() < new Date().getTime()) {
        return "Immediately"
    } else {
        return date.toLocaleString().split(',')[0];
    }
}

export default FormatDate;