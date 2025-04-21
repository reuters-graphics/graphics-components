interface MatchOptions {
  pre?: string;
  post?: string;
  caseSensitive?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extract?: (arg: any) => string;
}

interface MatchResult {
  rendered: string;
  score: number;
}

interface FilterResult<T> {
  string: string;
  score: number;
  index: number;
  original: T;
}

const fuzzy = {
  simpleFilter(pattern: string, array: string[]): string[] {
    return array.filter((str) => this.test(pattern, str));
  },

  test(pattern: string, str: string): boolean {
    return this.match(pattern, str) !== null;
  },

  match(
    pattern: string,
    str: string,
    opts: MatchOptions = {}
  ): MatchResult | null {
    let patternIdx = 0;
    const result: string[] = [];
    const len = str.length;
    let totalScore = 0;
    let currScore = 0;
    const pre = opts.pre || '';
    const post = opts.post || '';
    const compareString = opts.caseSensitive ? str : str.toLowerCase();
    pattern = opts.caseSensitive ? pattern : pattern.toLowerCase();

    for (let idx = 0; idx < len; idx++) {
      let ch = str[idx];
      if (compareString[idx] === pattern[patternIdx]) {
        ch = pre + ch + post;
        patternIdx += 1;
        currScore += 1 + currScore;
      } else {
        currScore = 0;
      }
      totalScore += currScore;
      result[result.length] = ch;
    }

    if (patternIdx === pattern.length) {
      totalScore = compareString === pattern ? Infinity : totalScore;
      return { rendered: result.join(''), score: totalScore };
    }

    return null;
  },

  filter<T>(
    pattern: string,
    arr: T[],
    opts: MatchOptions = {}
  ): FilterResult<T>[] {
    if (!arr || arr.length === 0) {
      return [];
    }
    if (typeof pattern !== 'string') {
      return arr.map((element, index) => ({
        string: element as unknown as string,
        score: 0,
        index,
        original: element,
      }));
    }

    return arr
      .reduce<FilterResult<T>[]>((prev, element, idx) => {
        let str = element as unknown as string;
        if (opts.extract) {
          str = opts.extract(element);
        }
        const rendered = this.match(pattern, str, opts);
        if (rendered != null) {
          prev.push({
            string: rendered.rendered,
            score: rendered.score,
            index: idx,
            original: element,
          });
        }
        return prev;
      }, [])
      .sort((a, b) => {
        const compare = b.score - a.score;
        if (compare) return compare;
        return a.index - b.index;
      });
  },
};

export default fuzzy;
