exports.handler = async function(event, context) {
    const body = JSON.parse(event.body);
    const userFlag = body.flag;
    const secretFlag = "/youalmostfoundyourfriend";  

    if (userFlag === secretFlag) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: "Yay! You captured the flag!" })
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: false, message: "Sorry, that's not the correct flag. Try again!" })
        };
    }
};
