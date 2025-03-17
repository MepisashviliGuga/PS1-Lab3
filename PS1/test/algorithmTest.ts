import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
} from "../src/algorithm";
import { expect } from "chai";

/*
 * Testing strategy for toBucketSets():
 *
 * TODO: Describe your testing strategy for toBucketSets() here.
 */
describe("toBucketSets()", () => {
  it("should return an empty array when given an empty Map", () => {
    const buckets: BucketMap = new Map();
    expect(toBucketSets(buckets)).to.deep.equal([]);
  });

  it("should correctly map a single bucket with one flashcard", () => {
    const flashcard1 = new Flashcard("Q1", "A1", "H1", ["tag1"]);
    const buckets: BucketMap = new Map([[0, new Set([flashcard1])]]);

    expect(toBucketSets(buckets)).to.deep.equal([new Set([flashcard1])]);
  });

  it("should handle multiple buckets with non-consecutive indices", () => {
    const flashcard1 = new Flashcard("Q1", "A1", "H1", ["tag1"]);
    const flashcard2 = new Flashcard("Q2", "A2", "H2", ["tag2"]);
    
    const buckets: BucketMap = new Map([
      [0, new Set([flashcard1])],
      [2, new Set([flashcard2])],
    ]);

    expect(toBucketSets(buckets)).to.deep.equal([
      new Set([flashcard1]), 
        undefined,         
      new Set([flashcard2])  
    ]);
  });

  it("should return empty sets for missing buckets", () => {
    const flashcard1 = new Flashcard("Q1", "A1", "H1", ["tag1"]);
    const flashcard2 = new Flashcard("Q2", "A2", "H2", ["tag2"]);
    const flashcard3 = new Flashcard("Q3", "A3", "H3", ["tag3"]);
    
    const buckets: BucketMap = new Map([
      
      [1, new Set([flashcard1])],
      [3, new Set([flashcard2, flashcard3])],
    ]);

    expect(toBucketSets(buckets)).to.deep.equal([
      undefined,              
      new Set([flashcard1]),   
      undefined,                  
      new Set([flashcard2, flashcard3])
    ]);
  });
});

/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
// describe("getBucketRange()", () => {
//   it("Example test case - replace with your own tests", () => {
//     assert.fail(
//       "Replace this test case with your own tests based on your testing strategy"
//     );
//   });
// });

// /*
//  * Testing strategy for practice():
//  *
//  * TODO: Describe your testing strategy for practice() here.
//  */
// describe("practice()", () => {
//   it("Example test case - replace with your own tests", () => {
//     assert.fail(
//       "Replace this test case with your own tests based on your testing strategy"
//     );
//   });
// });

// /*
//  * Testing strategy for update():
//  *
//  * TODO: Describe your testing strategy for update() here.
//  */
// describe("update()", () => {
//   it("Example test case - replace with your own tests", () => {
//     assert.fail(
//       "Replace this test case with your own tests based on your testing strategy"
//     );
//   });
// });

// /*
//  * Testing strategy for getHint():
//  *
//  * TODO: Describe your testing strategy for getHint() here.
//  */
// describe("getHint()", () => {
//   it("Example test case - replace with your own tests", () => {
//     assert.fail(
//       "Replace this test case with your own tests based on your testing strategy"
//     );
//   });
// });

// /*
//  * Testing strategy for computeProgress():
//  *
//  * TODO: Describe your testing strategy for computeProgress() here.
//  */
// describe("computeProgress()", () => {
//   it("Example test case - replace with your own tests", () => {
//     assert.fail(
//       "Replace this test case with your own tests based on your testing strategy"
//     );
//   });
// });
