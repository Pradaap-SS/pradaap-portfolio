import type { GuideChapter } from './python-guide'

export const slidingWindowGuide: GuideChapter[] = [
  // ─── Chapter 1: Introduction ─────────────────────────────────────────────────
  {
    id: 'introduction',
    title: '1. Introduction & Pattern Recognition',
    sections: [
      {
        id: 'what-is-sw',
        title: 'What is the Sliding Window Technique?',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Core concept, train-window intuition, and the O(n²) → O(n) improvement.',
        tags: ['concept', 'overview', 'complexity', 'brute-force'],
        blocks: [
          {
            type: 'text',
            html: `<p>The <strong>Sliding Window</strong> technique is a computational pattern for processing <em>contiguous subarrays or substrings</em> efficiently. Instead of recomputing results from scratch for every possible window (O(n²)–O(n³) brute force), you maintain a range <code>[left, right]</code> and <strong>slide</strong> it across the input, updating the result incrementally.</p>
<p class="mt-2">Think of a physical window on a moving train — as it slides, objects enter from one side and leave the other. You never restart from zero; you <em>adjust</em>.</p>`,
          },
          {
            type: 'callout',
            variant: 'must-know',
            text: 'Sliding Window reduces O(n²) brute force to O(n) by reusing the previous window\'s computation instead of recalculating from scratch. Each element is added once (right pointer) and removed once (left pointer) — O(2n) = O(n) total.',
          },
          {
            type: 'code',
            language: 'python',
            label: 'Visual — window slides right, adjusting incrementally',
            code: `# Array: [2, 1, 5, 1, 3, 2],  k = 3  (max sum of size-k window)
#
# Brute force: recompute sum for EVERY window starting position
#   [2,1,5] → sum=8     [1,5,1] → sum=7     [5,1,3] → sum=9  ...  O(n·k)
#
# Sliding Window: keep a running sum, add new, subtract old
#   Initial window: sum([2,1,5]) = 8
#   Slide: sum = 8 + arr[3] - arr[0] = 8 + 1 - 2 = 7
#   Slide: sum = 7 + arr[4] - arr[1] = 7 + 3 - 1 = 9  ← max!
#   Slide: sum = 9 + arr[5] - arr[2] = 9 + 2 - 5 = 6
#                                                       O(n)`,
          },
          {
            type: 'text',
            html: `<h4 class="font-semibold mb-2 mt-3">Complexity Comparison</h4>
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Approach</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Time</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Space</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Notes</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Brute Force (nested loops)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n²–n³)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(1)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Recalculates every window</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Prefix Sum</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Good for static range queries</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Sliding Window</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(1)–O(k)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Adaptive, handles variable windows</td></tr>
</tbody></table>`,
          },
        ],
      },
      {
        id: 'fixed-vs-dynamic',
        title: 'Fixed Window vs Dynamic Window',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Two core variants — choosing the right one instantly is a key interview skill.',
        tags: ['fixed', 'dynamic', 'variants', 'decision'],
        blocks: [
          {
            type: 'text',
            html: `<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Attribute</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Fixed Window</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Dynamic Window</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Window size</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Constant k (given)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Variable — grows and shrinks</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Left pointer</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Moves exactly 1 step with right</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Moves only when constraint violated</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Trigger phrase</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">"of size k", "k consecutive"</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">"longest/shortest that satisfies..."</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Shrink condition</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">right − left + 1 > k</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Constraint violated</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Classic example</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Max sum of k elements</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Longest substring no repeats</td></tr>
</tbody></table>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Visual comparison',
            code: `# FIXED WINDOW (size = 3):
# [ a  b  c  d  e  f  g ]
#   [-----]               left=0, right=2
#      [-----]            left=1, right=3  ← slide by 1 each step
#         [-----]         left=2, right=4

# DYNAMIC WINDOW (longest unique substring):
# [ a  b  b  a  c  d ]
#   [--]                  valid: {a,b}
#   [-----]               'b' repeats → SHRINK left
#      [--]               valid: {b}   (left jumped to 2)
#      [-----]            valid: {b,a}
#      [--------]         valid: {b,a,c}
#      [-----------]      valid: {b,a,c,d} ← answer = 4`,
          },
          {
            type: 'callout',
            variant: 'pattern',
            text: 'Rule of thumb: see "of size k" → Fixed template. See "longest/shortest...that satisfies" → Dynamic template. This single heuristic covers 80% of interview problems.',
          },
        ],
      },
      {
        id: 'pattern-recognition',
        title: 'Pattern Recognition Guide',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Keywords, decision tree, when NOT to use Sliding Window, and comparisons with similar patterns.',
        tags: ['recognition', 'keywords', 'decision-tree', 'comparison'],
        blocks: [
          {
            type: 'text',
            html: `<h4 class="font-semibold mb-2">Keywords That Signal Sliding Window</h4>`,
          },
          {
            type: 'list',
            items: [
              '"contiguous subarray / substring"',
              '"of size k" or "exactly k consecutive"',
              '"longest subarray/substring that..."',
              '"shortest subarray/substring with..."',
              '"find all substrings/subarrays where..."',
              '"no more than k distinct" or "at most k..."',
              '"contains all characters of..." (anagram / permutation)',
              '"maximum/minimum sum of contiguous..."',
            ],
          },
          {
            type: 'code',
            language: 'python',
            label: 'Decision tree — 30-second problem classification',
            code: `# Is the problem about a CONTIGUOUS subarray or substring?
# │
# ├── NO  → Try Two Pointers (sorted), HashMap, Prefix Sum, DP
# │
# └── YES
#     │
#     Is the window size FIXED (given k)?
#     │
#     ├── YES → Fixed Sliding Window
#     │         Shrink: when right - left + 1 > k, move left
#     │
#     └── NO (variable window)
#         │
#         ├── MAXIMIZE length  → expand freely, shrink when violated
#         │   "longest that satisfies"     update answer AFTER shrink
#         │
#         ├── MINIMIZE length  → expand until valid, shrink while valid
#         │   "shortest that satisfies"    update answer INSIDE shrink loop
#         │
#         └── COUNT windows    → atMost(k) - atMost(k-1)
#             "exactly k distinct"`,
          },
          {
            type: 'text',
            html: `<h4 class="font-semibold mb-2 mt-4">When Sliding Window Does NOT Work</h4>
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Scenario</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Better Approach</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Why SW Fails</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Non-contiguous elements</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Dynamic Programming</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Window must be contiguous</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Sorted array, finding pairs</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Two Pointers (converging)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Two ends, not sliding</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Static range sum queries</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Prefix Sum Array</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Prefix sum is simpler</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Max subarray with negatives</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Kadane's Algorithm</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Negatives break monotonicity</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Subarray sum = k (negatives ok)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Prefix Sum + HashMap</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Non-monotonic window validity</td></tr>
</tbody></table>`,
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'Sliding Window only works when the window\'s validity is MONOTONIC — adding elements consistently makes it "more valid" or "less valid." With negative numbers in a sum problem, a larger window can be both better and worse, breaking the pattern.',
          },
        ],
      },
    ],
  },

  // ─── Chapter 2: Core Concepts ────────────────────────────────────────────────
  {
    id: 'core-concepts',
    title: '2. Core Concepts & Mental Models',
    sections: [
      {
        id: 'window-boundaries',
        title: 'Window Boundaries: Left & Right Pointers',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'How left and right define the window, amortized O(n) proof, and the explorer/janitor mental model.',
        tags: ['left', 'right', 'pointers', 'amortized', 'boundaries'],
        blocks: [
          {
            type: 'code',
            language: 'python',
            label: 'Pointer anatomy',
            code: `# Array: [ 4,  2,  7,  1,  9,  3,  6 ]
# Index:   0   1   2   3   4   5   6
#
# Window [left=1, right=4]:
#              ↑              ↑
#            left           right
#              [ 2,  7,  1,  9 ]
#
# window size    = right - left + 1  =  4
# window content = arr[left..right]
#
# RIGHT pointer: "explorer"  — moves EVERY iteration, expands the window
# LEFT  pointer: "janitor"   — moves ONLY when the window is INVALID
#
# Amortized proof:
#   right moves forward: n times total
#   left  moves forward: ≤ n times total  (each element removed at most once)
#   Total operations:    O(2n) = O(n)`,
          },
          {
            type: 'callout',
            variant: 'must-know',
            text: 'Mental model: RIGHT is the explorer — always advancing. LEFT is the janitor — only moves to clean up a broken constraint. This asymmetry is the entire mechanism of Sliding Window.',
          },
        ],
      },
      {
        id: 'window-state',
        title: 'Maintaining Window State',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Frequency maps, running sums, distinct counters — what to track and how to update.',
        tags: ['state', 'frequency-map', 'running-sum', 'hashmap', 'distinct'],
        blocks: [
          {
            type: 'text',
            html: `<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Problem Type</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">State Structure</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Add (right expands)</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Remove (left shrinks)</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Sum / Average</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">int window_sum</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">+= arr[right]</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">−= arr[left]</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Char frequency</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">dict / int[26]</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">freq[c] += 1</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">freq[c] −= 1</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Distinct count</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">dict + int distinct</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">if freq[c] was 0: distinct++</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">if freq[c] becomes 0: distinct−−</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Window max</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Monotonic deque</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Pop smaller from back, push right</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Pop front if out of window</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Anagram match</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">freq + int formed</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">if freq[c] == need[c]: formed++</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">if freq[c] drops below need: formed−−</td></tr>
</tbody></table>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Frequency map lifecycle — the most common bug site',
            code: `# String: "a b c a b" — tracking distinct chars
freq = {}
distinct = 0

# RIGHT expands (add 'a'):
if freq.get('a', 0) == 0:   # was absent → new distinct char
    distinct += 1
freq['a'] = freq.get('a', 0) + 1

# LEFT shrinks (remove 'a'):
freq['a'] -= 1
if freq['a'] == 0:           # now absent → lose a distinct char
    distinct -= 1
    del freq['a']             # ← CRITICAL: delete the key!
                              #   Without this, len(freq) never shrinks`,
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'Always delete a key from the frequency map when its count reaches 0. Leaving zero-count keys means len(freq) never decreases — your distinct count will be permanently wrong. This is the #1 sliding window bug in interviews.',
          },
        ],
      },
    ],
  },

  // ─── Chapter 3: Templates ────────────────────────────────────────────────────
  {
    id: 'templates',
    title: '3. Reusable Templates (Python · Java · JS · C++)',
    sections: [
      {
        id: 'fixed-template',
        title: 'Fixed-Size Window Template',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'The canonical fixed window. Memorize — it solves an entire category instantly.',
        tags: ['template', 'fixed', 'python', 'java', 'javascript', 'cpp'],
        blocks: [
          {
            type: 'callout',
            variant: 'pattern',
            text: 'Fixed template: right always moves. When window exceeds size k, subtract the element that falls off (arr[right − k]). Update answer only once window reaches full size.',
          },
          {
            type: 'code',
            language: 'python',
            label: 'Python — Fixed Window',
            code: `def fixed_window(arr: list[int], k: int) -> int:
    n = len(arr)
    if n < k:
        return -1                        # edge case: array smaller than window

    window_sum = sum(arr[:k])            # build first window O(k)
    result = window_sum

    for right in range(k, n):           # right goes k → n-1
        window_sum += arr[right]         # add new element entering from right
        window_sum -= arr[right - k]     # remove element that fell off left
        # when right=k:  left element was arr[0] = arr[k-k]
        # when right=k+1: left element was arr[1] = arr[k+1-k]
        result = max(result, window_sum)

    return result                        # O(n) time, O(1) space`,
          },
          {
            type: 'code',
            language: 'java',
            label: 'Java — Fixed Window',
            code: `public int fixedWindow(int[] arr, int k) {
    int n = arr.length;
    if (n < k) return -1;

    int windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += arr[i];   // first window
    int result = windowSum;

    for (int right = k; right < n; right++) {
        windowSum += arr[right];          // add incoming
        windowSum -= arr[right - k];      // remove outgoing
        result = Math.max(result, windowSum);
    }
    return result;
}`,
          },
          {
            type: 'code',
            language: 'javascript',
            label: 'JavaScript — Fixed Window',
            code: `function fixedWindow(arr, k) {
    const n = arr.length;
    if (n < k) return -1;

    let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
    let result = windowSum;

    for (let right = k; right < n; right++) {
        windowSum += arr[right];
        windowSum -= arr[right - k];
        result = Math.max(result, windowSum);
    }
    return result;
}`,
          },
          {
            type: 'code',
            language: 'cpp',
            label: 'C++ — Fixed Window',
            code: `int fixedWindow(vector<int>& arr, int k) {
    int n = arr.size();
    if (n < k) return -1;

    int windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += arr[i];
    int result = windowSum;

    for (int right = k; right < n; right++) {
        windowSum += arr[right];
        windowSum -= arr[right - k];
        result = max(result, windowSum);
    }
    return result;
}`,
          },
        ],
      },
      {
        id: 'dynamic-template',
        title: 'Variable-Size Window Templates',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Longest and shortest dynamic window templates — with and without frequency maps.',
        tags: ['template', 'dynamic', 'longest', 'shortest', 'frequency-map'],
        blocks: [
          {
            type: 'code',
            language: 'python',
            label: 'Python — Dynamic Window (LONGEST valid)',
            code: `def longest_valid(arr, constraint):
    left = 0
    result = 0
    state = ...          # running sum, freq map, set — depends on problem

    for right in range(len(arr)):
        # 1. EXPAND: add arr[right] to window state
        # state += arr[right]  /  freq[arr[right]] += 1  / etc.

        # 2. SHRINK: while window is INVALID, move left forward
        while not is_valid(state, constraint):
            # state -= arr[left]  /  freq[arr[left]] -= 1  / etc.
            left += 1

        # 3. UPDATE: window is valid here — record if it's the largest
        result = max(result, right - left + 1)

    return result`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Python — Dynamic Window (SHORTEST valid)',
            code: `def shortest_valid(arr, target):
    left = 0
    window_sum = 0
    result = float('inf')

    for right in range(len(arr)):
        # 1. EXPAND
        window_sum += arr[right]

        # 2. SHRINK *while* valid — update answer INSIDE the shrink loop
        while window_sum >= target:
            result = min(result, right - left + 1)   # record before shrinking
            window_sum -= arr[left]
            left += 1

    return result if result != float('inf') else 0`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Python — Frequency Map Window (at most k distinct)',
            code: `from collections import defaultdict

def at_most_k_distinct(s: str, k: int) -> int:
    freq = defaultdict(int)
    left = 0
    result = 0

    for right in range(len(s)):
        freq[s[right]] += 1                    # expand

        while len(freq) > k:                   # shrink while invalid
            freq[s[left]] -= 1
            if freq[s[left]] == 0:
                del freq[s[left]]              # ← never skip this line
            left += 1

        result = max(result, right - left + 1) # window is valid here

    return result
# Change the constraint (len(freq) > k) to adapt to other problems`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'For "exactly k distinct": return at_most_k(k) − at_most_k(k−1). This trick converts an "exact" problem into two "at most" problems that are trivially solvable with the template above.',
          },
        ],
      },
    ],
  },

  // ─── Chapter 4: Fixed Window Problems ───────────────────────────────────────
  {
    id: 'fixed-problems',
    title: '4. Fixed Window Problems',
    sections: [
      {
        id: 'max-sum-k',
        title: 'Maximum Sum Subarray of Size K',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'The canonical entry point — every SW learner starts here.',
        tags: ['fixed', 'sum', 'classic', 'beginner'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem:</strong> Given an array of integers and number k, find the maximum sum of any contiguous subarray of size k.</p>
<p class="mt-1"><strong>Example:</strong> arr=[2,1,5,1,3,2], k=3 → <strong>9</strong> (subarray [5,1,3])</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Brute Force O(n·k) vs Sliding Window O(n)',
            code: `# ── Brute Force ──────────────────────────────────────────
def max_sum_brute(arr, k):
    max_sum = float('-inf')
    for i in range(len(arr) - k + 1):
        max_sum = max(max_sum, sum(arr[i:i+k]))  # O(k) each window
    return max_sum                               # Total: O(n·k)

# ── Sliding Window ────────────────────────────────────────
def max_sum_sliding(arr: list[int], k: int) -> int:
    if len(arr) < k:
        return -1

    window_sum = sum(arr[:k])
    result = window_sum

    for right in range(k, len(arr)):
        window_sum += arr[right] - arr[right - k]   # O(1) per slide
        result = max(result, window_sum)

    return result                                    # Total: O(n)`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Dry run — arr=[2,1,5,1,3,2], k=3',
            code: `# Initial window arr[0..2]: sum = 2+1+5 = 8   result=8
#
# right=3: sum = 8 + arr[3] - arr[0] = 8 + 1 - 2 = 7   result=8
# right=4: sum = 7 + arr[4] - arr[1] = 7 + 3 - 1 = 9   result=9  ← max
# right=5: sum = 9 + arr[5] - arr[2] = 9 + 2 - 5 = 6   result=9
#
# Answer: 9`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Edge cases to mention in interviews: k > n (return -1 or handle), all negative numbers (first window sum might be the answer — initialize result = window_sum, not -inf), k = n (the whole array).',
          },
        ],
      },
      {
        id: 'first-negative-window',
        title: 'First Negative Number in Every Window of Size K',
        difficulty: 'Intermediate',
        mustKnow: false,
        summary: 'Uses a deque of indices to track negatives without re-scanning the window.',
        tags: ['fixed', 'deque', 'positions', 'queue'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem:</strong> For every window of size k in the array, find the first negative number. Output 0 if none exists.</p>
<p class="mt-1"><strong>Example:</strong> arr=[-8,2,3,-6,10], k=2 → [-8, 0, -6, -6]</p>
<p class="mt-2"><strong>Why a deque?</strong> We need the first (leftmost) negative in each window in O(1). We store <em>indices</em> of negatives — as the window slides, we discard indices that fell out of the window.</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Deque of indices — O(n)',
            code: `from collections import deque

def first_negative_in_windows(arr: list[int], k: int) -> list[int]:
    dq = deque()   # indices of negative numbers in current window
    result = []

    for right in range(len(arr)):
        if arr[right] < 0:
            dq.append(right)             # only track negatives

        # Remove front if it's outside the current window [right-k+1 .. right]
        if dq and dq[0] < right - k + 1:
            dq.popleft()

        if right >= k - 1:               # window is full
            result.append(arr[dq[0]] if dq else 0)

    return result

# Dry run: arr=[-8,2,3,-6,10], k=2
# right=0: arr[0]=-8 < 0 → dq=[0]. Not full.
# right=1: arr[1]=2 ≥ 0. dq[0]=0 >= 1-2+1=0 ✓. Full. ans: arr[0]=-8
# right=2: arr[2]=3 ≥ 0. dq[0]=0 < 2-2+1=1 → pop. dq=[]. Full. ans: 0
# right=3: arr[3]=-6 < 0 → dq=[3]. dq[0]=3 >= 2 ✓. Full. ans: arr[3]=-6
# right=4: arr[4]=10 ≥ 0. dq[0]=3 >= 3 ✓. Full. ans: arr[3]=-6
# Result: [-8, 0, -6, -6]`,
          },
        ],
      },
    ],
  },

  // ─── Chapter 5: Dynamic Window Problems ─────────────────────────────────────
  {
    id: 'dynamic-problems',
    title: '5. Dynamic Window Problems',
    sections: [
      {
        id: 'longest-no-repeat',
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'LC #3 — the most commonly asked dynamic window problem at FAANG. Two approaches.',
        tags: ['dynamic', 'string', 'hashmap', 'LeetCode-3', 'FAANG', 'must-know'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem (LeetCode #3):</strong> Given a string s, find the length of the longest substring without repeating characters.</p>
<p class="mt-1"><strong>Examples:</strong> "abcabcbb" → 3 ("abc") &nbsp;|&nbsp; "bbbbb" → 1 ("b") &nbsp;|&nbsp; "pwwkew" → 3 ("wke")</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Approach 1: Last-seen index map (faster left jump)',
            code: `def length_of_longest_substring(s: str) -> int:
    last_seen = {}    # char → last seen index
    left = 0
    result = 0

    for right, char in enumerate(s):
        # If char is inside the current window, jump left past its last position
        if char in last_seen and last_seen[char] >= left:
            left = last_seen[char] + 1   # jump — O(1), no inner loop

        last_seen[char] = right          # always update last seen
        result = max(result, right - left + 1)

    return result

# Time: O(n)  Space: O(min(n, alphabet_size))`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Approach 2: Set-based (more intuitive for beginners)',
            code: `def length_of_longest_substring_v2(s: str) -> int:
    seen = set()
    left = 0
    result = 0

    for right in range(len(s)):
        while s[right] in seen:          # shrink until no duplicate
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        result = max(result, right - left + 1)

    return result
# Same O(n) amortized — each char added and removed at most once`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Dry run — "abcabcbb"',
            code: `# last_seen={} left=0
#
# r=0 'a': new. last_seen={a:0}. size=1. result=1
# r=1 'b': new. last_seen={a:0,b:1}. size=2. result=2
# r=2 'c': new. last_seen={a:0,b:1,c:2}. size=3. result=3
# r=3 'a': seen! last_seen[a]=0 >= left=0 → left=1. last_seen={a:3,...}. size=3. result=3
# r=4 'b': seen! last_seen[b]=1 >= left=1 → left=2. last_seen={b:4,...}. size=3. result=3
# r=5 'c': seen! last_seen[c]=2 >= left=2 → left=3. last_seen={c:5,...}. size=3. result=3
# r=6 'b': seen! last_seen[b]=4 >= left=3 → left=5. last_seen={b:6,...}. size=2. result=3
# r=7 'b': seen! last_seen[b]=6 >= left=5 → left=7. last_seen={b:7,...}. size=1. result=3
#
# Answer: 3`,
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'The check `last_seen[char] >= left` is non-negotiable. Without it, you might jump left backward when a char was seen before the current window started. Never move left backward — that breaks the O(n) guarantee.',
          },
        ],
      },
      {
        id: 'min-size-subarray-sum',
        title: 'Minimum Size Subarray Sum',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'LC #209 — the canonical "shortest window" pattern. Update answer inside the shrink loop.',
        tags: ['dynamic', 'minimum', 'shortest', 'sum', 'LeetCode-209'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem (LeetCode #209):</strong> Given an array of <em>positive integers</em> and a target, return the minimal length of a contiguous subarray whose sum ≥ target. Return 0 if none.</p>
<p class="mt-1"><strong>Example:</strong> target=7, nums=[2,3,1,2,4,3] → <strong>2</strong> (subarray [4,3])</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Shortest valid window — O(n)',
            code: `def min_subarray_len(target: int, nums: list[int]) -> int:
    left = 0
    window_sum = 0
    result = float('inf')

    for right in range(len(nums)):
        window_sum += nums[right]             # expand

        while window_sum >= target:           # shrink WHILE valid
            result = min(result, right - left + 1)  # record BEFORE shrinking
            window_sum -= nums[left]
            left += 1

    return result if result != float('inf') else 0

# Dry run: target=7, nums=[2,3,1,2,4,3]
# r=0: sum=2.  <7.
# r=1: sum=5.  <7.
# r=2: sum=6.  <7.
# r=3: sum=8.  >=7 → result=4(0..3). sub arr[0]=2→sum=6<7. left=1.
# r=4: sum=10. >=7 → result=4(1..4). sub arr[1]=3→sum=7>=7.
#              result=3(2..4). sub arr[2]=1→sum=6<7. left=3.
# r=5: sum=9.  >=7 → result=3(3..5). sub arr[3]=2→sum=7>=7.
#              result=2(4..5). sub arr[4]=4→sum=3<7. left=5.
# Answer: 2`,
          },
          {
            type: 'callout',
            variant: 'must-know',
            text: 'This only works because all values are POSITIVE — adding more always increases the sum (monotonic). With negative numbers, use prefix sum + binary search or a deque-based approach instead.',
          },
        ],
      },
      {
        id: 'fruits-baskets',
        title: 'Fruits Into Baskets (At Most K Distinct)',
        difficulty: 'Intermediate',
        mustKnow: false,
        summary: 'LC #904 — longest subarray with at most 2 (or k) distinct values. Generalizable template.',
        tags: ['dynamic', 'distinct', 'frequency-map', 'LeetCode-904'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem (LeetCode #904):</strong> You have two baskets; pick the longest contiguous section of fruit trees using at most 2 different fruit types.</p>
<p class="mt-1">Equivalently: <em>find the longest subarray with at most 2 distinct integers.</em></p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'At most k distinct — generalized O(n)',
            code: `from collections import defaultdict

def total_fruit(fruits: list[int], k: int = 2) -> int:
    freq = defaultdict(int)
    left = 0
    result = 0

    for right in range(len(fruits)):
        freq[fruits[right]] += 1

        while len(freq) > k:               # more than k distinct types
            freq[fruits[left]] -= 1
            if freq[fruits[left]] == 0:
                del freq[fruits[left]]     # must delete zero-count key
            left += 1

        result = max(result, right - left + 1)

    return result
# Change k=2 to k=3, k=10, etc. — same template works`,
          },
          {
            type: 'callout',
            variant: 'pattern',
            text: 'This template solves an entire family: "longest subarray with at most k distinct elements." Fruits Into Baskets, Longest Substring with K Distinct Characters (LC #340), and similar problems are all the same code with k changed.',
          },
        ],
      },
    ],
  },

  // ─── Chapter 6: Frequency Counting Windows ───────────────────────────────────
  {
    id: 'frequency-windows',
    title: '6. Frequency Counting Windows',
    sections: [
      {
        id: 'permutation-in-string',
        title: 'Permutation in String',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'LC #567 — fixed window + frequency matching. Introduces the "matches counter" optimization.',
        tags: ['fixed', 'frequency', 'anagram', 'LeetCode-567'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem (LeetCode #567):</strong> Return true if any permutation of s1 is a substring of s2.</p>
<p class="mt-1"><strong>Example:</strong> s1="ab", s2="eidbaooo" → true ("ba" at index 3)</p>
<p class="mt-2"><strong>Key insight:</strong> A permutation = same characters, same frequencies. We need a fixed window of size <code>len(s1)</code> in s2 with matching character frequencies.</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Optimized: formed/matches counter — O(n)',
            code: `from collections import Counter

def check_inclusion(s1: str, s2: str) -> bool:
    if len(s1) > len(s2):
        return False

    need = Counter(s1)
    window = Counter(s2[:len(s1)])         # initial fixed window

    # matches = number of chars whose freq matches need exactly
    matches = sum(1 for c in need if window[c] == need[c])
    if matches == len(need):
        return True

    k = len(s1)
    for right in range(k, len(s2)):
        c_in  = s2[right]                  # entering from right
        c_out = s2[right - k]              # leaving from left

        # Process incoming character
        if c_in in need:
            if window[c_in] == need[c_in]: matches -= 1   # was matching
            window[c_in] += 1
            if window[c_in] == need[c_in]: matches += 1   # now matches

        # Process outgoing character
        if c_out in need:
            if window[c_out] == need[c_out]: matches -= 1 # was matching
            window[c_out] -= 1
            if window[c_out] == need[c_out]: matches += 1 # now matches

        if matches == len(need):
            return True

    return False
# Time: O(n)  Space: O(1) since alphabet is fixed size`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'The matches counter avoids comparing two frequency arrays on every step (which would be O(26)). Instead, we update matches in O(1) only when a character\'s count crosses the required threshold.',
          },
        ],
      },
      {
        id: 'find-all-anagrams',
        title: 'Find All Anagrams in a String',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'LC #438 — same as Permutation in String but collect all start indices.',
        tags: ['fixed', 'anagram', 'collect', 'LeetCode-438'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem (LeetCode #438):</strong> Given strings s and p, return all start indices of p's anagrams in s.</p>
<p class="mt-1"><strong>Example:</strong> s="cbaebabacd", p="abc" → [0, 6]</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Collect all valid window start indices — O(n)',
            code: `from collections import Counter

def find_anagrams(s: str, p: str) -> list[int]:
    if len(p) > len(s):
        return []

    need   = Counter(p)
    window = Counter(s[:len(p)])
    matches = sum(1 for c in need if window[c] == need[c])
    result = [0] if matches == len(need) else []

    k = len(p)
    for right in range(k, len(s)):
        c_in, c_out = s[right], s[right - k]

        if c_in in need:
            if window[c_in] == need[c_in]: matches -= 1
            window[c_in] += 1
            if window[c_in] == need[c_in]: matches += 1

        if c_out in need:
            if window[c_out] == need[c_out]: matches -= 1
            window[c_out] -= 1
            if window[c_out] == need[c_out]: matches += 1

        if matches == len(need):
            result.append(right - k + 1)   # record window start index

    return result`,
          },
        ],
      },
      {
        id: 'minimum-window-substring',
        title: 'Minimum Window Substring — Full Deep Dive',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'LC #76 — the hardest and most asked Sliding Window problem. Brute force → optimal with complete dry run.',
        tags: ['dynamic', 'frequency', 'minimum', 'hard', 'LeetCode-76', 'FAANG', 'deep-dive'],
        blocks: [
          {
            type: 'callout',
            variant: 'must-know',
            text: 'LeetCode #76 is asked by Google, Amazon, Meta, and Microsoft more than almost any other Sliding Window problem. Master this one — the "formed counter" technique appears in many variants.',
          },
          {
            type: 'text',
            html: `<p><strong>Problem:</strong> Given strings s and t, return the minimum window in s that contains all characters of t (including duplicates). Return "" if impossible.</p>
<p class="mt-1"><strong>Example:</strong> s="ADOBECODEBANC", t="ABC" → "BANC"</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Brute Force O(n²·m) — understand first',
            code: `from collections import Counter

def min_window_brute(s: str, t: str) -> str:
    need = Counter(t)
    result, min_len = "", float('inf')
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            window = Counter(s[i:j])
            if all(window[c] >= need[c] for c in need) and j-i < min_len:
                min_len, result = j-i, s[i:j]
    return result`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Sliding Window O(n+m) — line-by-line explained',
            code: `from collections import Counter

def min_window(s: str, t: str) -> str:
    if not t or not s:
        return ""

    need     = Counter(t)   # how many of each char we require
    have     = {}           # how many we currently have in window
    required = len(need)    # distinct chars in t we must satisfy
    formed   = 0            # distinct chars currently at required freq

    left = 0
    result, min_len = "", float('inf')

    for right in range(len(s)):
        c = s[right]
        have[c] = have.get(c, 0) + 1

        # Did this char's count just reach the required amount?
        if c in need and have[c] == need[c]:
            formed += 1

        # All requirements satisfied — shrink from left
        while formed == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                result  = s[left : right + 1]

            lc = s[left]
            have[lc] -= 1
            if lc in need and have[lc] < need[lc]:
                formed -= 1   # broke a requirement — stop shrinking
            left += 1

    return result`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Dry run — s="ADOBECODEBANC", t="ABC"',
            code: `# need={A:1,B:1,C:1}  required=3
#
# r=0 'A': have={A:1}. A satisfied → formed=1.
# r=1 'D': have[D]=1. D not in need. formed=1.
# r=2 'O': formed=1.
# r=3 'B': have[B]=1. B satisfied → formed=2.
# r=4 'E': formed=2.
# r=5 'C': have[C]=1. C satisfied → formed=3. ← VALID
#   Shrink: window s[0..5]="ADOBEC" len=6 → result="ADOBEC"
#   remove 'A': have[A]=0 < need[A]=1 → formed=2. left=1. Stop.
#
# r=6..9: expand. formed stays 2.
# r=9  'B': have[B]=2. 2>1, no new satisfaction. formed=2.
# r=10 'A': have[A]=1. A satisfied → formed=3. ← VALID
#   Shrink: s[1..10] len=10. Not better.
#   remove D,O,B(still have 1),E,C → C drops below 1 → formed=2. left=6.
#
# r=11 'N': formed=2.
# r=12 'C': have[C]=1. C satisfied → formed=3. ← VALID
#   s[6..12]="ODEBANC" len=7. Not better.
#   remove O → left=7. s[7..12]="DEBANC" len=6. Not better.
#   remove D → left=8. s[8..12]="EBANC" len=5. result="EBANC".
#   remove E → left=9. s[9..12]="BANC" len=4. result="BANC". ← best
#   remove B: have[B]=0 < need=1 → formed=2. left=10. Stop.
#
# Final answer: "BANC"`,
          },
          {
            type: 'text',
            html: `<h4 class="font-semibold mb-2 mt-2">Common Interview Follow-ups</h4>`,
          },
          {
            type: 'list',
            items: [
              'What if t has duplicate chars? → Handled: need counts frequencies, not just presence.',
              'What if t has chars not in s? → result stays "", returned correctly.',
              'Can you optimize space? → Use int[128] for ASCII instead of two dicts.',
              'What if s and t are the same? → Window = entire s, returned correctly.',
              'What is the time complexity? → O(n+m): right moves n times, left ≤ n times, building need is O(m).',
            ],
          },
        ],
      },
    ],
  },

  // ─── Chapter 7: Advanced ─────────────────────────────────────────────────────
  {
    id: 'advanced',
    title: '7. Advanced Sliding Window',
    sections: [
      {
        id: 'sw-maximum',
        title: 'Sliding Window Maximum (Monotonic Deque)',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'LC #239 — requires a monotonic decreasing deque. O(n) time using the invariant that useless elements are pruned eagerly.',
        tags: ['advanced', 'monotonic-deque', 'maximum', 'hard', 'LeetCode-239'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem (LeetCode #239):</strong> Given array nums and integer k, return the maximum of each sliding window of size k.</p>
<p class="mt-1"><strong>Example:</strong> nums=[1,3,-1,-3,5,3,6,7], k=3 → [3,3,5,5,6,7]</p>
<p class="mt-2"><strong>Why a simple max fails:</strong> When the maximum leaves the window, finding the next maximum naively is O(k). We need O(1) using a <strong>monotonic decreasing deque of indices</strong>.</p>
<p class="mt-2"><strong>Invariant:</strong> The deque stores indices whose values are in <em>decreasing</em> order. The front is always the index of the current window maximum.</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Monotonic Deque — O(n) time, O(k) space',
            code: `from collections import deque

def max_sliding_window(nums: list[int], k: int) -> list[int]:
    dq = deque()   # stores INDICES; values are monotonically decreasing
    result = []

    for right in range(len(nums)):
        # Remove from BACK: indices with values smaller than nums[right]
        # They can never be the max while nums[right] is in the window
        while dq and nums[dq[-1]] < nums[right]:
            dq.pop()
        dq.append(right)

        # Remove from FRONT: index has exited the window [right-k+1 .. right]
        if dq[0] < right - k + 1:
            dq.popleft()

        # Record max once first full window is reached
        if right >= k - 1:
            result.append(nums[dq[0]])   # front = max index

    return result`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Dry run — nums=[1,3,-1,-3,5,3,6,7], k=3',
            code: `# r=0: val=1.  dq=[0]
# r=1: val=3.  3>nums[0]=1 → pop 0. dq=[1]
# r=2: val=-1. -1<3 → keep. dq=[1,2]. Full. max=nums[1]=3 ✓
# r=3: val=-3. -3<-1 → keep. dq=[1,2,3]. Front=1 ≥ 3-3+1=1. max=nums[1]=3 ✓
# r=4: val=5.  5>-3→pop3, 5>-1→pop2, 5>3→pop1. dq=[4]. max=nums[4]=5 ✓
# r=5: val=3.  3<5 → keep. dq=[4,5]. Front=4 ≥ 5-3+1=3. max=nums[4]=5 ✓
# r=6: val=6.  6>3→pop5, 6>5→pop4. dq=[6]. max=nums[6]=6 ✓
# r=7: val=7.  7>6→pop6. dq=[7]. max=nums[7]=7 ✓
# Result: [3, 3, 5, 5, 6, 7]`,
          },
          {
            type: 'callout',
            variant: 'must-know',
            text: 'Each element is pushed once and popped once → O(n) total. The deque size is bounded by k. This monotonic deque trick also appears in: Largest Rectangle in Histogram, Trapping Rain Water, and Jump Game VI.',
          },
        ],
      },
      {
        id: 'char-replacement',
        title: 'Longest Repeating Character Replacement',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'LC #424 — key formula: window_size − max_freq ≤ k. The max_freq trick is non-obvious and interview-critical.',
        tags: ['advanced', 'dynamic', 'formula', 'LeetCode-424', 'FAANG'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem (LeetCode #424):</strong> Given string s and integer k, find the length of the longest substring containing the same letter after at most k replacements.</p>
<p class="mt-1"><strong>Example:</strong> s="AABABBA", k=1 → 4</p>
<p class="mt-3"><strong>Key Formula:</strong></p>
<pre class="font-mono text-xs mt-1 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">window_size - max_freq ≤ k
↑                ↑
total chars   most freq char   → chars we must replace</pre>
<p class="mt-2">If the replacements needed ≤ k, the window is valid.</p>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Sliding Window with max_freq trick — O(n)',
            code: `def character_replacement(s: str, k: int) -> int:
    freq    = {}
    left    = 0
    max_freq = 0   # max frequency of ANY single char in current window
    result  = 0

    for right in range(len(s)):
        c = s[right]
        freq[c] = freq.get(c, 0) + 1
        max_freq = max(max_freq, freq[c])

        # Invalid: too many replacements needed
        if (right - left + 1) - max_freq > k:
            freq[s[left]] -= 1
            left += 1          # shrink by exactly 1
            # Note: max_freq intentionally NOT updated here

        result = max(result, right - left + 1)

    return result

# Why max_freq never decreases:
# We only care about windows LARGER than current result.
# A new larger window only forms when max_freq increases.
# Keeping max_freq high means we only grow the window when truly beneficial.`,
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'NOT updating max_freq when shrinking is the subtle trick that makes this O(n). It\'s not a bug — max_freq is a lower bound on what\'s needed to achieve a better answer. Recalculating it would be correct but O(n²).',
          },
        ],
      },
      {
        id: 'k-distinct-subarrays',
        title: 'Subarrays with K Distinct Integers',
        difficulty: 'Advanced',
        mustKnow: false,
        summary: 'LC #992 — the "exactly k = at_most(k) − at_most(k−1)" trick that unlocks an entire family of counting problems.',
        tags: ['advanced', 'counting', 'distinct', 'trick', 'LeetCode-992'],
        blocks: [
          {
            type: 'text',
            html: `<p><strong>Problem (LeetCode #992):</strong> Return the number of subarrays with <em>exactly</em> k distinct integers.</p>
<p class="mt-1"><strong>Example:</strong> nums=[1,2,1,2,3], k=2 → 7</p>
<p class="mt-2"><strong>Key trick:</strong></p>
<pre class="font-mono text-xs mt-1 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">exactly(k) = atMost(k) − atMost(k−1)

atMost(k) is easy: when window has ≤k distinct, all subarrays ending at
right and starting at [left..right] are valid → count += right - left + 1</pre>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Exactly k = atMost(k) − atMost(k-1) — O(n)',
            code: `from collections import defaultdict

def subarrays_with_k_distinct(nums: list[int], k: int) -> int:
    def at_most(k: int) -> int:
        freq  = defaultdict(int)
        left  = 0
        count = 0
        for right in range(len(nums)):
            freq[nums[right]] += 1
            while len(freq) > k:
                freq[nums[left]] -= 1
                if freq[nums[left]] == 0:
                    del freq[nums[left]]
                left += 1
            count += right - left + 1   # all valid subarrays ending at right
        return count

    return at_most(k) - at_most(k - 1)`,
          },
          {
            type: 'callout',
            variant: 'pattern',
            text: 'This "exactly(k) = atMost(k) − atMost(k−1)" trick generalizes: count subarrays with exactly k zeros, exactly k odd numbers, exactly k distinct characters. Whenever "exactly" seems hard, split into two "at most" calls.',
          },
        ],
      },
    ],
  },

  // ─── Chapter 8: Mock Interview ───────────────────────────────────────────────
  {
    id: 'mock-interview',
    title: '8. Mock Interview Simulation',
    sections: [
      {
        id: 'interview-sim',
        title: 'Live Interview: Minimum Window Substring',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'Full simulation — clarification, brute force, pattern identification, coding, complexity, edge cases. How a strong candidate handles this in 45 minutes.',
        tags: ['interview', 'communication', 'strategy', 'FAANG', 'mock'],
        blocks: [
          {
            type: 'text',
            html: `<div class="space-y-3">
<p><strong class="text-brand-700 dark:text-brand-300">Interviewer:</strong> "Given strings s and t, return the minimum window in s containing all characters of t. Return empty string if impossible."</p>
<hr class="border-slate-200 dark:border-slate-700"/>
<p><strong class="text-slate-700 dark:text-slate-300">Candidate — Step 1: Clarify (always ~2–3 minutes)</strong></p>
<ul class="list-disc ml-4 text-sm space-y-1 mt-1">
<li>"Does t have duplicate characters that must all appear?" → Yes.</li>
<li>"Case-sensitive?" → Yes.</li>
<li>"If s is shorter than t?" → Return empty string.</li>
<li>"Multiple valid windows of the same length?" → Return any.</li>
</ul></div>`,
          },
          {
            type: 'text',
            html: `<p><strong class="text-slate-700 dark:text-slate-300">Candidate — Step 2: Brute Force (never jump straight to optimal)</strong></p>
<blockquote class="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic text-sm text-slate-600 dark:text-slate-400 mt-2">
"The naive approach: check every substring of s — that's O(n²) substrings — and for each, verify it contains all of t, which takes O(n). Total: O(n³). Clearly too slow for large inputs. Can I improve?"
</blockquote>`,
          },
          {
            type: 'text',
            html: `<p><strong class="text-slate-700 dark:text-slate-300">Candidate — Step 3: Identify the Pattern</strong></p>
<blockquote class="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic text-sm text-slate-600 dark:text-slate-400 mt-2">
"I notice: contiguous substring + a constraint to minimize. That's Sliding Window. The right pointer expands until we have a valid window containing all of t. Then the left pointer shrinks to find the minimum window. Once shrinking breaks validity, right expands again."
</blockquote>`,
          },
          {
            type: 'text',
            html: `<p><strong class="text-slate-700 dark:text-slate-300">Candidate — Step 4: State Data Structures BEFORE Coding</strong></p>
<blockquote class="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic text-sm text-slate-600 dark:text-slate-400 mt-2">
"I need: (1) 'need' map — frequencies required from t. (2) 'have' map — frequencies in current window. (3) a 'formed' counter — how many distinct chars currently meet their required count. This avoids comparing the two maps on every step."
</blockquote>`,
          },
          {
            type: 'callout',
            variant: 'pattern',
            text: 'Saying "I need X to track Y" before writing a single line is a strong signal. Interviewers reward candidates who design before they implement — it separates senior thinking from junior hacking.',
          },
          {
            type: 'code',
            language: 'python',
            label: 'Candidate writes live — narrating each section',
            code: `from collections import Counter

def min_window(s: str, t: str) -> str:
    # "First handle edge cases..."
    if not s or not t or len(s) < len(t): return ""

    need     = Counter(t)
    have     = {}
    required = len(need)
    formed   = 0
    left     = 0
    result, min_len = "", float('inf')

    for right in range(len(s)):         # "right expands every iteration"
        c = s[right]
        have[c] = have.get(c, 0) + 1
        if c in need and have[c] == need[c]:
            formed += 1                 # "this char's requirement just met"

        while formed == required:       # "shrink while valid"
            if right - left + 1 < min_len:
                min_len = right - left + 1
                result  = s[left:right+1]
            lc = s[left]
            have[lc] -= 1
            if lc in need and have[lc] < need[lc]:
                formed -= 1            # "requirement broken — stop shrinking"
            left += 1

    return result`,
          },
          {
            type: 'text',
            html: `<p><strong class="text-slate-700 dark:text-slate-300">Candidate — Step 5: Complexity & Edge Cases</strong></p>
<blockquote class="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic text-sm text-slate-600 dark:text-slate-400 mt-2">
"Time: O(n + m) — right moves n times, left at most n times, building need is O(m). Space: O(m) for the two frequency maps. Edge cases: t longer than s → handled by initial check. t has chars not in s → formed never reaches required, return ''. Duplicate chars in t → handled since need stores counts."
</blockquote>
<p class="mt-2 text-sm font-medium text-brand-700 dark:text-brand-300">Interviewer: "Excellent. Can you walk me through a quick dry run with s='BANC', t='ABC'?"</p>
<blockquote class="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic text-sm text-slate-600 dark:text-slate-400 mt-1">
"Sure. need={A:1,B:1,C:1}. r=0 'B': formed=1. r=1 'A': formed=2. r=2 'N': not in need. r=3 'C': formed=3. Shrink: window 'BANC' len=4, result='BANC'. Remove 'B': formed=2. Stop. End of string. Return 'BANC'."
</blockquote>`,
          },
        ],
      },
    ],
  },

  // ─── Chapter 9: Advanced Topics ──────────────────────────────────────────────
  {
    id: 'advanced-topics',
    title: '9. Advanced Topics & Real-World Applications',
    sections: [
      {
        id: 'rate-limiter',
        title: 'Sliding Window Rate Limiter (System Design)',
        difficulty: 'Advanced',
        mustKnow: false,
        summary: 'How Sliding Window powers production rate limiting at Cloudflare, Stripe, and AWS.',
        tags: ['system-design', 'rate-limiter', 'real-world', 'distributed', 'redis'],
        blocks: [
          {
            type: 'text',
            html: `<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Algorithm</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Approach</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Pros</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Cons</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fixed Window Counter</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Count per minute bucket</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(1) time/space</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Burst at boundary</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Sliding Window Log</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Store each timestamp</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Exact accuracy</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">High memory</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Sliding Window Counter</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Weighted interpolation</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Accurate + O(1)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Approximate</td></tr>
</tbody></table>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'In-process Sliding Window Log Rate Limiter',
            code: `from collections import deque
import time

class SlidingWindowRateLimiter:
    """Exact sliding window using a deque of request timestamps."""

    def __init__(self, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window       = window_seconds
        self.requests     = deque()       # timestamps of allowed requests

    def allow_request(self) -> bool:
        now          = time.time()
        window_start = now - self.window

        # Evict expired timestamps — the "left pointer" moves
        while self.requests and self.requests[0] <= window_start:
            self.requests.popleft()

        if len(self.requests) < self.max_requests:
            self.requests.append(now)     # the "right pointer" adds
            return True
        return False                      # rate limited

# 100 requests per 60 seconds per user
limiter = SlidingWindowRateLimiter(max_requests=100, window_seconds=60)`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Redis-based distributed rate limiter (production pattern)',
            code: `import redis, time

class RedisRateLimiter:
    """Distributed sliding window using Redis sorted sets.
       Used in production at Stripe, Cloudflare, Shopify."""

    def __init__(self, client, max_requests: int, window_ms: int):
        self.redis        = client
        self.max_requests = max_requests
        self.window_ms    = window_ms

    def allow(self, user_id: str) -> bool:
        key  = f"rl:{user_id}"
        now  = int(time.time() * 1000)           # milliseconds
        wstart = now - self.window_ms

        pipe = self.redis.pipeline()
        pipe.zremrangebyscore(key, 0, wstart)    # remove expired
        pipe.zcard(key)                           # count remaining
        pipe.zadd(key, {str(now): now})           # add current
        pipe.expire(key, self.window_ms // 1000 + 1)
        results = pipe.execute()

        return results[1] < self.max_requests     # results[1] = count before add`,
          },
        ],
      },
      {
        id: 'real-world',
        title: 'Real-World Applications Across Domains',
        difficulty: 'Advanced',
        mustKnow: false,
        summary: 'Networking, finance, ML, monitoring, analytics — Sliding Window is everywhere.',
        tags: ['real-world', 'networking', 'finance', 'analytics', 'ML', 'monitoring'],
        blocks: [
          {
            type: 'text',
            html: `<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Domain</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Application</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Window = ?</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2 font-medium">Networking (TCP)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Flow control — limits unacknowledged data</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Unacked packet buffer</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2 font-medium">Monitoring / SRE</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">P95/P99 latency over rolling window</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Last 60 seconds of requests</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2 font-medium">Analytics</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Moving averages, trend detection</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Last N data points</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2 font-medium">Finance</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">SMA, EMA, Bollinger Bands, RSI</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Last k trading days</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2 font-medium">ML / NLP</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">N-gram extraction, attention context</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">N consecutive tokens</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2 font-medium">Streaming</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Anomaly detection on event streams</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Recent time bucket</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2 font-medium">Recommendation</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Session-based user activity analysis</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Last N user interactions</td></tr>
</tbody></table>`,
          },
        ],
      },
    ],
  },

  // ─── Chapter 10: Cheat Sheets & Practice Roadmap ─────────────────────────────
  {
    id: 'cheat-sheets',
    title: '10. Cheat Sheets & Practice Roadmap',
    sections: [
      {
        id: 'reference-table',
        title: 'Complete Pattern & Complexity Reference',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'One-page revision: every problem, its pattern, complexity, key data structure, and critical formula.',
        tags: ['cheat-sheet', 'complexity', 'reference', 'revision', 'formulas'],
        blocks: [
          {
            type: 'text',
            html: `<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Problem</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Type</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Time</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Space</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Key Structure</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Max Sum Subarray K</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fixed</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(1)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Running sum</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">First Negative in Window</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fixed</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(k)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Deque of indices</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Longest No-Repeat Substr</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Dynamic</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(α)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Last-seen HashMap</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Min Size Subarray Sum</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Dynamic</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(1)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Running sum</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fruits Into Baskets</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Dynamic</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(k)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">FreqMap + len()</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Permutation in String</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fixed+Freq</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(1)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">int[26] + matches</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Find All Anagrams</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fixed+Freq</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(1)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">int[26] + matches</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Minimum Window Substring</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Dynamic+Freq</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n+m)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(m)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">FreqMap + formed</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Sliding Window Maximum</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fixed+Deque</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(k)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Monotonic Deque</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Char Replacement</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Dynamic</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(1)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">int[26] + max_freq</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">K Distinct Subarrays</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Count trick</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(n)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">O(k)</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">FreqMap × 2</td></tr>
</tbody></table>`,
          },
          {
            type: 'code',
            language: 'python',
            label: 'Key formulas — commit these to memory',
            code: `# Window size:              right - left + 1
# Fixed shrink trigger:      when right >= k, remove arr[right - k]
# Valid char replacement:    window_size - max_freq <= k
# Exactly k distinct:        at_most(k) - at_most(k - 1)
# Count subarrays (dynamic): count += right - left + 1  (all ending at right)
# Amortized time:            right moves n times + left moves ≤ n times = O(2n)`,
          },
          {
            type: 'text',
            html: `<h4 class="font-semibold mb-2 mt-4">Common Bugs Checklist</h4>`,
          },
          {
            type: 'list',
            items: [
              'Not deleting freq[char] when count = 0 → len(freq) never shrinks, distinct count wrong',
              'Moving left backward: always check last_seen[c] >= left before jumping',
              'Updating answer before window reaches size k (fixed window)',
              'Off-by-one: window size is right − left + 1, not right − left',
              'Forgetting edge case: k > n, empty string, t not a subset of s\'s alphabet',
              'Not handling duplicate characters in t for Minimum Window Substring',
              'Using while instead of if when shrinking fixed window (left overshoots)',
            ],
          },
        ],
      },
      {
        id: 'practice-roadmap',
        title: 'Practice Roadmap — Zero to FAANG Ready',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Ordered problem list, phases, estimated timeline, and the mindset for fast mastery.',
        tags: ['practice', 'roadmap', 'LeetCode', 'FAANG', 'timeline', 'order'],
        blocks: [
          {
            type: 'text',
            html: `<h4 class="font-semibold mb-2">Phase 1 — Foundations (Days 1–3): Build the muscle memory</h4>
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Problem</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">LC #</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Level</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Focus</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Max Sum Subarray of Size K</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">—</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Easy</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fixed window template</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Contains Duplicate II</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#219</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Easy</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fixed window + HashSet</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Longest Substring Without Repeat</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#3</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Medium</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Dynamic window, last-seen map</td></tr>
</tbody></table>

<h4 class="font-semibold mb-2 mt-5">Phase 2 — Core Patterns (Days 4–7): All medium variants</h4>
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Problem</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">LC #</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Focus</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Minimum Size Subarray Sum</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#209</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Shortest window pattern</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Permutation in String</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#567</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Frequency matching + matches counter</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Find All Anagrams</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#438</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Collect all valid windows</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Fruits into Baskets</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#904</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">At most k distinct</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Max Consecutive Ones III</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#1004</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Flip at most k zeros</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Longest Repeating Char Replacement</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#424</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">max_freq formula</td></tr>
</tbody></table>

<h4 class="font-semibold mb-2 mt-5">Phase 3 — FAANG Level (Days 8–14): Hard problems</h4>
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-slate-100 dark:bg-slate-800">
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Problem</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">LC #</th>
<th class="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">Focus</th>
</tr></thead>
<tbody>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Minimum Window Substring</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#76</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">formed counter, hard dynamic+freq</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Sliding Window Maximum</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#239</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Monotonic decreasing deque</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Subarrays with K Distinct</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#992</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">atMost(k) − atMost(k−1)</td></tr>
<tr class="bg-slate-50 dark:bg-slate-800/40"><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Substring with Concatenation of All Words</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#30</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Multi-word fixed window</td></tr>
<tr><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Minimum Number of K Consecutive Bit Flips</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">#995</td><td class="border border-slate-200 dark:border-slate-700 px-3 py-2">Greedy + deque parity trick</td></tr>
</tbody></table>`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Mastery timeline: 3 days → Fixed Window comfortable. 7 days → all Medium patterns. 14 days → Hard problems. After 20+ problems, pattern recognition becomes automatic — you will identify Sliding Window in the first 30 seconds of reading the problem.',
          },
        ],
      },
      {
        id: 'final-summary',
        title: 'Final Summary — Mental Models & Interview Strategy',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Five mental models, communication strategies, and the single fastest path to mastery.',
        tags: ['summary', 'mental-models', 'strategy', 'tips', 'pitfalls'],
        blocks: [
          {
            type: 'text',
            html: `<h4 class="font-semibold mb-2">The 5 Mental Models</h4>`,
          },
          {
            type: 'list',
            items: [
              '1. TRAIN WINDOW — objects enter from right, leave from left. You never restart.',
              '2. EXPLORER & JANITOR — right pointer always moves; left only moves to fix a broken constraint.',
              '3. AMORTIZED O(n) — each element added once (right) and removed once (left). Total = O(2n).',
              '4. MONOTONIC PROPERTY — Sliding Window only works when adding elements moves validity in ONE direction. Test this before applying.',
              '5. FORMED COUNTER — track "how many requirements are met" instead of comparing maps. O(1) per step instead of O(k).',
            ],
          },
          {
            type: 'text',
            html: `<h4 class="font-semibold mb-2 mt-4">Interview Communication — What Strong Candidates Say</h4>`,
          },
          {
            type: 'list',
            items: [
              '"Contiguous substring + constraint → I\'m thinking Sliding Window." (say this aloud)',
              '"Let me start with brute force to show I understand the problem." (always)',
              '"I\'ll use a frequency map and a formed counter — here\'s why..." (design before code)',
              '"Each element is added once and removed once, so this is O(n) amortized." (complexity)',
              '"Edge cases: empty input, k=0, k>n, t longer than s, duplicate chars in t." (proactive)',
            ],
          },
          {
            type: 'callout',
            variant: 'must-know',
            text: 'Fastest mastery path: implement each template from scratch 3× without looking. Then solve 2 problems per day for 14 days from the roadmap above. By problem 20, Sliding Window will be your fastest-recognized pattern in any interview setting.',
          },
        ],
      },
    ],
  },
]
