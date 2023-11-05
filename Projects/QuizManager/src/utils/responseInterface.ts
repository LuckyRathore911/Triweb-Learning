interface ResponseFormat {
    status: "success" | "error";
    data: {} | [];
    message: string;
}
export default ResponseFormat