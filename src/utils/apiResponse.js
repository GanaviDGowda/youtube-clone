class ApiResponse {
  constructor(statusCode, message = "Sucess", data = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
