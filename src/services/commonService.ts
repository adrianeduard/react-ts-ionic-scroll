export interface IBug {
  id: number;
  name: string;
  isResolved: boolean;
}

export interface IBugsResponse {
  bugs: IBug[];
  pageSize: number;
  pageNumber: number;
}

export function getBugs(
  pageNumber: number,
  pageSize: number = 10
): IBugsResponse {
  const bugs: IBug[] = [];

  for (
    let i = pageSize * (pageNumber - 1) + 1;
    i <= pageSize * pageNumber;
    i++
  ) {
    bugs.push({
      id: i,
      name: `Bug ${i}`,
      isResolved: false,
    });
  }

  return {
    bugs,
    pageNumber,
    pageSize,
  };
}
