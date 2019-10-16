import { BasicUsecase } from '../shared';

export default class CheckIfUserExists implements BasicUsecase {
    private a: string;

    public constructor() {
        this.a = 'a';
    }

    public execute(): void {
        this.a = 'b';
    }
}
