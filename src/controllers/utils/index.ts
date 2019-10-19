export interface ErrorDescription {
    success: boolean;
    message: string;
}

export default (error: Error): ErrorDescription => ({
    success: false,
    message: error.message,
});
