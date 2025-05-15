type MAXIMUM_ALLOWED_BOUNDARY = 999

type ComputeRange<
  N extends number,
  Result extends Array<unknown> = [],
> =
  /**
   * If length of Result is equal to N,
   * stop recursion and return Result
   */
  (Result['length'] extends N
    ? Result
    /**
     * Otherwise, call ComputeRange recursively with same N,
     * but with extendsd Result - add Result.length to current Result
     * 
     * First step:
     * Result is [] -> ComputeRange is called with [...[], 0]
     * 
     * Second step:
     * Result is [0] -> ComputeRange is called with [...[0], 1]
     * 
     * Third step:
     * Result is [0, 1] -> ComputeRange is called with [...[0, 1], 2]
     * 
     * ComputeRange is called until Result will meet a length requirement
     */
    : ComputeRange<N, [...Result, Result['length']]>
  )

// 0 , 1, 2 ... 998
export type NumberRange = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number]

// Pure js representation of ComputeRange utility type

const ComputeRange = (N: number, Result: number[] = []): number[] => {
  if (Result.length === N) {
      return Result
  }
  return ComputeRange(N, [...Result, Result.length])
