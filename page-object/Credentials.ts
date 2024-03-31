export class Credentials {
    private static email: string
    private static password: string
    private constructor(){ }

    public static getEmail() {
        if (!Credentials.email) {
            Credentials.email = "standard_user";
        }

        return Credentials.email;
    }

    public static getPassword() {
        if (!Credentials.password) {
            Credentials.password = "secret_sauce";
        }

        return Credentials.password;
    }
}
