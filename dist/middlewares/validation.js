class ExtendedError extends Error {
    constructor(originalError) {
        super(originalError.message);
        this.status = 400;
        this.originalError = originalError;
    }
}
export const validation = (schema) => {
    return (req, _, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return next(new ExtendedError(error));
        }
        next();
    };
};
