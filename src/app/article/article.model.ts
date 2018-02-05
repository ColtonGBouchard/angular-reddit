export class Article {
    title: string;
    link: string;
    votes: number;
    subreddit: string;

    constructor(title: string, link: string, subreddit: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.subreddit = subreddit;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}
