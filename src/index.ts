import * as Path from 'path';
import { execSync } from 'child_process';

export class DotGit {
    constructor(
        public cwd = process.cwd()
    ) { }

    get branch(): string {
        return this.execSync('git rev-parse --abbrev-ref HEAD');
    }

    get head(): string {
        return this.execSync('git rev-parse HEAD');
    }

    get short(): string {
        return this.execSync('git rev-parse --short HEAD');
    }

    private execSync(command: string): string {
        return execSync(command, { cwd: this.cwd }).toString();
    }
}

export default new DotGit();
