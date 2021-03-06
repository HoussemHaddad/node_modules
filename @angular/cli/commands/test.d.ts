import { CommandScope, Option } from '../models/command';
import { ArchitectCommand } from '../models/architect-command';
export interface Options {
    project?: string;
    configuration?: string;
    prod: boolean;
}
export default class TestCommand extends ArchitectCommand {
    readonly name: string;
    readonly target: string;
    readonly description: string;
    static aliases: string[];
    readonly scope: CommandScope;
    readonly multiTarget: boolean;
    readonly options: Option[];
    run(options: Options): Promise<number>;
}
