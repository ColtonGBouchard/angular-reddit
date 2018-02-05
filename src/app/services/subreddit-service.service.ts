import { Injectable } from '@angular/core';

@Injectable()
export class SubredditService {
  subreddits: string[] = ['doggifs', 'peoplefallingdown', 'dadjokes'];

  verifySubreddit(subreddit: HTMLInputElement) {
    if (this.subreddits.includes(subreddit.value)) {
      return true;
    } else {
      return false;
    }
  }
  constructor() { }

}
