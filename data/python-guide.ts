export type Difficulty = 'Fundamental' | 'Intermediate' | 'Advanced'

export type ContentBlock =
  | { type: 'text'; html: string }
  | { type: 'code'; language: string; code: string; label?: string }
  | { type: 'callout'; variant: 'must-know' | 'tip' | 'warning' | 'pattern'; text: string }
  | { type: 'list'; items: string[] }

export type GuideSection = {
  id: string
  title: string
  difficulty: Difficulty
  mustKnow?: boolean
  summary: string
  tags: string[]
  blocks: ContentBlock[]
}

export type GuideChapter = {
  id: string
  title: string
  sections: GuideSection[]
}

export const pythonGuide: GuideChapter[] = [
  // ─── Chapter 1: Basics ───────────────────────────────────────────────────────
  {
    id: 'basics',
    title: 'Python Basics & Syntax',
    sections: [
      {
        id: 'variables-types',
        title: 'Variables & Data Types',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Core Python types and how they behave in interviews.',
        tags: ['variables', 'types', 'casting'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Type overview',
            code: `# Dynamic typing — no declaration needed
x = 10          # int
y = 3.14        # float
s = "hello"     # str
b = True        # bool (True/False, capital)
n = None        # NoneType

# Multiple assignment
a, b, c = 1, 2, 3
a = b = c = 0

# Swap without temp variable
a, b = b, a

# Type conversion
int("42")           # 42
float("3.14")       # 3.14
str(100)            # "100"
bool(0)             # False  — 0, "", [], {}, set(), None are falsy
list("abc")         # ['a', 'b', 'c']
ord('A')            # 65    — char to ASCII
chr(65)             # 'A'   — ASCII to char`
          },
          {
            type: 'callout', variant: 'must-know',
            text: 'Falsy values: None, 0, 0.0, "", [], {}, set(). Everything else is truthy. Use this in conditions: `if not arr:` instead of `if len(arr) == 0:`.'
          },
          {
            type: 'code', language: 'python', label: 'Numbers & infinity',
            code: `17 // 3         # 5   — floor division (rounds toward -inf)
-17 // 3        # -6  — NOT -5! Watch out
17 % 3          # 2
-17 % 3         # 1   — Python modulo always non-negative
2 ** 10         # 1024
abs(-7)         # 7
round(3.567, 2) # 3.57

# Infinity — use for min/max initialization
INF = float('inf')
NEG_INF = float('-inf')
min_so_far = float('inf')
max_so_far = float('-inf')

# Python integers have no overflow
10 ** 100       # works fine — no integer overflow in Python`
          },
          {
            type: 'callout', variant: 'warning',
            text: 'Floor division with negatives: -17 // 3 = -6, not -5. Python rounds toward negative infinity. Use int(-17 / 3) if you want truncation toward zero.'
          }
        ]
      },
      {
        id: 'io-patterns',
        title: 'Input / Output for Coding Platforms',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'How to read input and produce output on LeetCode, HackerRank, and similar platforms.',
        tags: ['input', 'output', 'stdin', 'competitive'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Reading input',
            code: `# Single line
n = int(input())

# Multiple values on one line
a, b = map(int, input().split())

# List of integers on one line
arr = list(map(int, input().split()))

# Multiple lines into a list
n = int(input())
arr = [int(input()) for _ in range(n)]

# Read all input at once (competitive programming)
import sys
data = sys.stdin.read().split()
idx = 0
n = int(data[idx]); idx += 1
arr = [int(data[idx + i]) for i in range(n)]`
          },
          {
            type: 'code', language: 'python', label: 'Print tricks',
            code: `print("hello", "world")          # hello world
print("hello", "world", sep=", ") # hello, world
print("result:", 42)

# Print list without brackets
print(*[1, 2, 3])                  # 1 2 3
print(*[1, 2, 3], sep=", ")        # 1, 2, 3

# f-strings (Python 3.6+)
name, score = "Alice", 99
print(f"{name} scored {score}")    # Alice scored 99
print(f"{score:.2f}")              # 99.00`
          }
        ]
      },
      {
        id: 'operators',
        title: 'Operators & Expressions',
        difficulty: 'Fundamental',
        summary: 'Operators commonly used in interview problems.',
        tags: ['operators', 'bitwise', 'boolean'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Bitwise operators',
            code: `# Bitwise — extremely common in interview problems
n & 1           # check if odd (last bit)
n | (1 << k)    # set bit k
n & ~(1 << k)   # clear bit k
n ^ n           # 0  — XOR with itself
a ^ b ^ a       # b  — XOR cancels pairs (find single number trick)
n >> 1          # divide by 2
n << 1          # multiply by 2
bin(255)        # '0b11111111'
int('1111', 2)  # 15 — binary string to int`
          },
          {
            type: 'callout', variant: 'pattern',
            text: 'XOR trick: a ^ b ^ a == b. To find the one element that appears once when all others appear twice, XOR all elements together.'
          },
          {
            type: 'code', language: 'python', label: 'Boolean & comparison',
            code: `# Chained comparisons (Pythonic)
1 < x < 10          # True if x is between 1 and 10
a == b == c         # True if all equal

# Short-circuit evaluation
x = x or default    # use default if x is falsy
result = val if condition else other   # ternary

# None checks
if x is None: ...
if x is not None: ...`
          }
        ]
      }
    ]
  },

  // ─── Chapter 2: Control Flow ─────────────────────────────────────────────────
  {
    id: 'control-flow',
    title: 'Control Flow & Comprehensions',
    sections: [
      {
        id: 'loops',
        title: 'Loops & Conditionals',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Pythonic loop patterns that appear constantly in LeetCode solutions.',
        tags: ['loops', 'for', 'while', 'enumerate', 'zip'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'For loop patterns',
            code: `# Range
for i in range(5):        # 0 1 2 3 4
for i in range(2, 10, 2): # 2 4 6 8
for i in range(9, -1, -1):# 9 8 7 ... 0 (reverse)

# Enumerate — index + value
for i, val in enumerate(arr):
    print(i, val)

for i, val in enumerate(arr, start=1):  # start index at 1
    print(i, val)

# Zip — iterate two lists together
for a, b in zip(list1, list2):
    print(a, b)

# Zip with index
for i, (a, b) in enumerate(zip(list1, list2)):
    print(i, a, b)

# Unpack nested
matrix = [[1,2],[3,4],[5,6]]
for row in matrix:
    for val in row:
        print(val)`
          },
          {
            type: 'code', language: 'python', label: 'While loop patterns',
            code: `# Two-pointer while
l, r = 0, len(arr) - 1
while l < r:
    # process
    l += 1
    r -= 1

# While with break/continue
while True:
    val = get_next()
    if val is None:
        break
    if val < 0:
        continue
    process(val)

# Loop else — runs if loop completed without break
for x in arr:
    if x == target:
        print("found")
        break
else:
    print("not found")`
          }
        ]
      },
      {
        id: 'comprehensions',
        title: 'Comprehensions',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'List, dict, and set comprehensions — write cleaner, faster interview solutions.',
        tags: ['comprehension', 'list', 'dict', 'set', 'generator'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'List comprehensions',
            code: `# Basic
squares = [x**2 for x in range(10)]

# With condition (filter)
evens = [x for x in range(20) if x % 2 == 0]

# Nested (flatten matrix)
matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [val for row in matrix for val in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Conditional expression
result = [x if x > 0 else -x for x in arr]  # abs values

# 2D grid initialization
grid = [[0] * cols for _ in range(rows)]     # CORRECT
# DON'T do: [[0] * cols] * rows  — all rows share same reference!`
          },
          {
            type: 'callout', variant: 'warning',
            text: '[[0] * cols] * rows creates rows that are references to the same list. Modifying one row modifies all. Always use [[0]*cols for _ in range(rows)].'
          },
          {
            type: 'code', language: 'python', label: 'Dict & set comprehensions',
            code: `# Dict comprehension
word_len = {word: len(word) for word in words}
freq = {k: v for k, v in counter.items() if v > 1}
inverted = {v: k for k, v in d.items()}   # invert a dict

# Set comprehension
unique_lengths = {len(word) for word in words}

# Generator expression (lazy — memory efficient)
total = sum(x**2 for x in range(1000000))   # no list created
any_neg = any(x < 0 for x in arr)
all_pos = all(x > 0 for x in arr)`
          }
        ]
      }
    ]
  },

  // ─── Chapter 3: Functions ─────────────────────────────────────────────────────
  {
    id: 'functions',
    title: 'Functions & Functional Tools',
    sections: [
      {
        id: 'function-basics',
        title: 'Functions, Args, Closures',
        difficulty: 'Fundamental',
        summary: 'Defining functions, default args, *args/**kwargs, and nested functions.',
        tags: ['functions', 'args', 'kwargs', 'closures'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Function patterns',
            code: `# Basic
def add(a, b):
    return a + b

# Default arguments
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}"

# *args and **kwargs
def variadic(*args, **kwargs):
    print(args)    # tuple
    print(kwargs)  # dict

# Multiple return values (returns a tuple)
def min_max(arr):
    return min(arr), max(arr)

lo, hi = min_max([3, 1, 4, 1, 5])

# Nested function / closure
def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
counter()   # 1
counter()   # 2`
          }
        ]
      },
      {
        id: 'lambda-functional',
        title: 'Lambda, sorted, map, filter',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Functional tools used heavily for sorting and transforming data in interviews.',
        tags: ['lambda', 'sorted', 'map', 'filter', 'key'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Lambda & sorted',
            code: `# Lambda — anonymous one-liner function
square = lambda x: x ** 2
add = lambda a, b: a + b

# sorted with key — most common in interviews
arr = [3, 1, 4, 1, 5, 9, 2, 6]
sorted(arr)                         # [1, 1, 2, 3, 4, 5, 6, 9]
sorted(arr, reverse=True)           # descending

words = ["banana", "apple", "cherry"]
sorted(words, key=len)              # sort by length
sorted(words, key=lambda w: w[-1])  # sort by last character

# Sort list of tuples
pairs = [(1, 'b'), (3, 'a'), (2, 'c')]
sorted(pairs, key=lambda x: x[1])  # sort by second element
sorted(pairs, key=lambda x: (-x[0], x[1]))  # desc by first, asc by second

# Sort objects
people = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
sorted(people, key=lambda p: p["age"])

# In-place sort
arr.sort()
arr.sort(key=lambda x: -x)  # sort descending in-place`
          },
          {
            type: 'code', language: 'python', label: 'map, filter, reduce',
            code: `# map — apply function to each element
nums = [1, 2, 3, 4]
squares = list(map(lambda x: x**2, nums))   # [1, 4, 9, 16]
strs = list(map(str, nums))                 # ['1','2','3','4']

# filter — keep elements where function returns True
evens = list(filter(lambda x: x % 2 == 0, nums))  # [2, 4]

# reduce — fold a sequence into a single value
from functools import reduce
product = reduce(lambda a, b: a * b, nums)   # 24

# Prefer comprehensions over map/filter for readability
squares = [x**2 for x in nums]
evens = [x for x in nums if x % 2 == 0]`
          }
        ]
      },
      {
        id: 'recursion-memo',
        title: 'Recursion & Memoization',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Recursive patterns and lru_cache — the most powerful tool for DP in Python interviews.',
        tags: ['recursion', 'memoization', 'lru_cache', 'dp'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Recursion patterns',
            code: `# Standard recursion structure
def solve(n):
    # Base case
    if n <= 0:
        return 0
    # Recursive case
    return n + solve(n - 1)

# Increase recursion limit if needed (rare but useful)
import sys
sys.setrecursionlimit(10**6)`
          },
          {
            type: 'code', language: 'python', label: 'Memoization with lru_cache',
            code: `from functools import lru_cache

# @lru_cache caches results — turns exponential recursion into linear
@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Must use immutable args (int, str, tuple) — NOT lists/dicts
@lru_cache(maxsize=None)
def dp(i, remaining):   # i and remaining are ints — OK
    ...

# Cache on a method inside a class — use tuple for state
@lru_cache(maxsize=None)
def solve(i, j, memo_state):   # pass tuple instead of mutable object
    ...

# Clear cache between test cases (LeetCode runs methods multiple times)
fib.cache_clear()`
          },
          {
            type: 'callout', variant: 'must-know',
            text: '@lru_cache(maxsize=None) is the fastest way to add memoization to any recursive function in Python. All arguments must be hashable (no lists or dicts as params — convert to tuples).'
          }
        ]
      }
    ]
  },

  // ─── Chapter 4: Strings ───────────────────────────────────────────────────────
  {
    id: 'strings',
    title: 'Strings',
    sections: [
      {
        id: 'string-methods',
        title: 'String Methods & Operations',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'The string methods you will use in almost every interview problem involving strings.',
        tags: ['strings', 'split', 'join', 'strip', 'find', 'replace'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Essential string methods',
            code: `s = "  Hello, World!  "

s.lower()           # "  hello, world!  "
s.upper()           # "  HELLO, WORLD!  "
s.strip()           # "Hello, World!"
s.lstrip()          # "Hello, World!  "
s.rstrip()          # "  Hello, World!"
s.split(",")        # ['  Hello', ' World!  ']
s.split()           # ['Hello,', 'World!']  — splits on whitespace

",".join(["a","b","c"])   # "a,b,c"
" ".join(["Hello","World"])  # "Hello World"

s.replace("World", "Python")   # "  Hello, Python!  "
s.find("World")                # 9  (-1 if not found)
s.count("l")                   # 3
s.startswith("  Hello")        # True
s.endswith("!  ")              # True
"abc".center(7, "-")           # "--abc--"
"42".zfill(5)                  # "00042"`
          },
          {
            type: 'code', language: 'python', label: 'String slicing',
            code: `s = "abcdefgh"
s[0]        # 'a'
s[-1]       # 'h'
s[2:5]      # 'cde'
s[:3]       # 'abc'
s[5:]       # 'fgh'
s[::2]      # 'aceg'  — every 2nd char
s[::-1]     # 'hgfedcba'  — reverse string
s[1:7:2]    # 'bdf'

# Strings are immutable — build new ones
# Don't concatenate in a loop — use list then join
result = []
for char in s:
    result.append(char.upper())
"".join(result)   # efficient string building`
          },
          {
            type: 'callout', variant: 'warning',
            text: 'String concatenation in a loop (s += char) is O(n²). Instead, append to a list and join at the end: "".join(parts). This is O(n).'
          }
        ]
      },
      {
        id: 'string-patterns',
        title: 'String Interview Patterns',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Patterns that appear repeatedly in string-based LeetCode problems.',
        tags: ['anagram', 'palindrome', 'sliding-window', 'counter'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Common patterns',
            code: `from collections import Counter

# Check anagram
def is_anagram(s, t):
    return Counter(s) == Counter(t)
    # Alternative: sorted(s) == sorted(t)  — O(n log n)

# Check palindrome
def is_palindrome(s):
    s = s.lower()
    filtered = [c for c in s if c.isalnum()]
    return filtered == filtered[::-1]

# Frequency count
freq = Counter("interview")
freq.most_common(3)     # [('i', 2), ('n', 1), ...]

# Character checks
c.isalpha()     # True if letter
c.isdigit()     # True if digit
c.isalnum()     # True if letter or digit
c.isspace()     # True if whitespace
c.islower()     # True if lowercase
c.isupper()     # True if uppercase

# ASCII tricks
ord('a')                    # 97
ord('z') - ord('a')         # 25
chr(ord('a') + 3)           # 'd'

# Build frequency array for lowercase letters
freq = [0] * 26
for c in s:
    freq[ord(c) - ord('a')] += 1`
          }
        ]
      }
    ]
  },

  // ─── Chapter 5: Core Data Structures ─────────────────────────────────────────
  {
    id: 'core-ds',
    title: 'Core Data Structures',
    sections: [
      {
        id: 'lists',
        title: 'Lists',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Python lists are dynamic arrays. Know their time complexities cold.',
        tags: ['list', 'array', 'append', 'pop', 'slice'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'List operations',
            code: `arr = [3, 1, 4, 1, 5]

# Access / update — O(1)
arr[0]          # 3
arr[-1]         # 5
arr[1] = 9

# Append / pop from end — O(1) amortized
arr.append(6)
arr.pop()           # removes and returns last element
arr.pop(2)          # removes and returns element at index 2

# Insert / remove from middle — O(n)
arr.insert(1, 99)   # insert 99 at index 1
arr.remove(4)       # removes first occurrence of value 4

# Search — O(n)
arr.index(5)        # first index of value 5
5 in arr            # True

# Useful operations
arr.reverse()       # in-place reverse
arr.sort()          # in-place sort — O(n log n)
sorted(arr)         # returns new sorted list
arr.count(1)        # count occurrences
arr.copy()          # shallow copy  (also: arr[:])
arr.extend([7,8])   # append multiple items
arr + [7, 8]        # concatenation (returns new list)

# Length
len(arr)

# Slicing creates a copy
sub = arr[1:4]      # O(k) where k is slice size`
          },
          {
            type: 'list',
            items: [
              'arr[i] — O(1)',
              'arr.append(x) — O(1) amortized',
              'arr.pop() — O(1)',
              'arr.pop(i) — O(n)',
              'arr.insert(i, x) — O(n)',
              'arr.remove(x) — O(n)',
              'x in arr — O(n)',
              'arr.sort() — O(n log n)'
            ]
          }
        ]
      },
      {
        id: 'dicts',
        title: 'Dictionaries',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Hash maps — the most versatile data structure in interview problems.',
        tags: ['dict', 'hashmap', 'defaultdict', 'counter', 'frequency'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Dictionary operations',
            code: `d = {"a": 1, "b": 2, "c": 3}

# Access — O(1) average
d["a"]                  # 1
d.get("z")              # None (no KeyError)
d.get("z", 0)           # 0 (default value)

# Insert / update — O(1) average
d["d"] = 4
d.update({"e": 5, "f": 6})

# Delete — O(1) average
del d["a"]
d.pop("b")              # removes and returns value
d.pop("z", None)        # safe pop with default

# Check membership — O(1) average
"a" in d                # True
"z" not in d            # True

# Iterate
for key in d:               # keys
for val in d.values():      # values
for key, val in d.items():  # both

# Useful
len(d)
d.keys()        # dict_keys view
d.values()      # dict_values view
d.items()       # dict_items view

# Merge dicts (Python 3.9+)
merged = d1 | d2
d1 |= d2   # in-place`
          },
          {
            type: 'code', language: 'python', label: 'defaultdict & Counter',
            code: `from collections import defaultdict, Counter

# defaultdict — no KeyError on missing key
freq = defaultdict(int)
for c in "hello":
    freq[c] += 1     # no need to check if key exists

graph = defaultdict(list)
graph[1].append(2)   # build adjacency list cleanly

# Counter — specialized dict for counting
cnt = Counter("mississippi")
# Counter({'s': 4, 'i': 4, 'p': 2, 'm': 1})

cnt.most_common(2)           # [('s', 4), ('i', 4)]
cnt['s']                     # 4
cnt['z']                     # 0  — no KeyError

# Counter arithmetic
c1 = Counter("abc")
c2 = Counter("bcd")
c1 + c2     # Counter({'b': 2, 'c': 2, 'a': 1, 'd': 1})
c1 - c2     # Counter({'a': 1})  — only positive counts
c1 & c2     # intersection: min counts
c1 | c2     # union: max counts`
          }
        ]
      },
      {
        id: 'sets-tuples',
        title: 'Sets & Tuples',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Sets for O(1) membership and deduplication. Tuples as immutable keys.',
        tags: ['set', 'tuple', 'hashable', 'dedup'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Set operations',
            code: `s = {1, 2, 3, 4, 5}

# O(1) average for all
s.add(6)
s.remove(3)         # KeyError if missing
s.discard(99)       # safe remove — no error
3 in s              # False

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
a | b               # union:        {1,2,3,4,5,6}
a & b               # intersection: {3,4}
a - b               # difference:   {1,2}
a ^ b               # symmetric diff: {1,2,5,6}

# Dedup while preserving order (Python 3.7+)
seen = set()
result = []
for x in arr:
    if x not in seen:
        seen.add(x)
        result.append(x)`
          },
          {
            type: 'code', language: 'python', label: 'Tuples as hashable keys',
            code: `# Tuples are immutable and hashable — use as dict keys or in sets
visited = set()
visited.add((row, col))         # store coordinate pairs
if (row, col) in visited: ...

# Tuple unpacking
point = (3, 7)
x, y = point

# Named tuple
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 7)
p.x, p.y     # 3, 7`
          }
        ]
      }
    ]
  },

  // ─── Chapter 6: Stack, Queue, Heap ───────────────────────────────────────────
  {
    id: 'stack-queue-heap',
    title: 'Stack, Queue & Heap',
    sections: [
      {
        id: 'stack',
        title: 'Stack',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Use a Python list as a stack. LIFO — last in, first out.',
        tags: ['stack', 'LIFO', 'parentheses', 'monotonic'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Stack operations',
            code: `# Python list as stack — all O(1) amortized at the end
stack = []
stack.append(1)     # push
stack.append(2)
stack.append(3)
stack[-1]           # peek — 3
stack.pop()         # pop  — 3
bool(stack)         # True if non-empty
not stack           # True if empty

# Classic: valid parentheses
def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for c in s:
        if c in mapping:
            top = stack.pop() if stack else '#'
            if mapping[c] != top:
                return False
        else:
            stack.append(c)
    return not stack`
          }
        ]
      },
      {
        id: 'queue-deque',
        title: 'Queue & Deque',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Use collections.deque for O(1) operations on both ends. Essential for BFS.',
        tags: ['queue', 'deque', 'BFS', 'FIFO'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Deque operations',
            code: `from collections import deque

q = deque()
q.append(1)         # enqueue right  — O(1)
q.appendleft(0)     # enqueue left   — O(1)
q.pop()             # dequeue right  — O(1)
q.popleft()         # dequeue left   — O(1)  ← use for BFS queue
q[0]                # peek left
q[-1]               # peek right
len(q)
bool(q)

# BFS template using deque
def bfs(start, graph):
    visited = set([start])
    queue = deque([start])
    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`
          },
          {
            type: 'callout', variant: 'must-know',
            text: 'Never use list as a queue. list.pop(0) is O(n). collections.deque.popleft() is O(1). Always use deque for BFS.'
          }
        ]
      },
      {
        id: 'heap',
        title: 'Heap (Priority Queue)',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Python\'s heapq is a min-heap. Use negation for max-heap. Critical for top-K and scheduling problems.',
        tags: ['heap', 'heapq', 'priority-queue', 'min-heap', 'max-heap'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'heapq — min-heap',
            code: `import heapq

# Min-heap — smallest element at index 0
heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 3)
heap[0]                     # peek min: 1
heapq.heappop(heap)         # pop min: 1
heapq.heappushpop(heap, 4)  # push then pop (efficient)
heapq.heapreplace(heap, 4)  # pop then push (efficient)

# Heapify in O(n)
arr = [3, 1, 4, 1, 5]
heapq.heapify(arr)          # transforms list into heap in-place

# K smallest / largest
heapq.nsmallest(3, arr)     # [1, 1, 3]
heapq.nlargest(3, arr)      # [5, 4, 3]`
          },
          {
            type: 'code', language: 'python', label: 'Max-heap & tuple heap',
            code: `import heapq

# Max-heap — negate values
max_heap = []
heapq.heappush(max_heap, -5)
heapq.heappush(max_heap, -1)
-max_heap[0]                # peek max: 5
-heapq.heappop(max_heap)    # pop max: 5

# Heap with tuples — sorted by first element
heap = []
heapq.heappush(heap, (priority, task_id, task))
priority, task_id, task = heapq.heappop(heap)

# Kth largest element
def kth_largest(nums, k):
    heapq.heapify(nums)                 # min-heap
    while len(nums) > k:
        heapq.heappop(nums)
    return nums[0]

# Top K frequent elements
from collections import Counter
def top_k_frequent(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)`
          },
          {
            type: 'callout', variant: 'pattern',
            text: 'Heap of size K pattern: maintain a min-heap of size K to find K largest elements in a stream. When heap exceeds K, pop the minimum. The heap root is the Kth largest.'
          }
        ]
      }
    ]
  },

  // ─── Chapter 7: Trees & Graphs ───────────────────────────────────────────────
  {
    id: 'trees-graphs',
    title: 'Trees & Graphs',
    sections: [
      {
        id: 'tree-traversal',
        title: 'Binary Trees — Traversal & BFS',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'TreeNode definition, DFS (preorder/inorder/postorder), BFS level-order. These are the foundation of most tree problems.',
        tags: ['tree', 'DFS', 'BFS', 'inorder', 'preorder', 'level-order'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'TreeNode & DFS traversals',
            code: `# Standard TreeNode definition (LeetCode)
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Preorder: root → left → right
def preorder(root):
    if not root: return []
    return [root.val] + preorder(root.left) + preorder(root.right)

# Inorder: left → root → right (gives sorted order for BST)
def inorder(root):
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)

# Postorder: left → right → root
def postorder(root):
    if not root: return []
    return postorder(root.left) + postorder(root.right) + [root.val]

# Iterative inorder (common in interviews)
def inorder_iterative(root):
    stack, result = [], []
    cur = root
    while cur or stack:
        while cur:
            stack.append(cur)
            cur = cur.left
        cur = stack.pop()
        result.append(cur.val)
        cur = cur.right
    return result`
          },
          {
            type: 'code', language: 'python', label: 'BFS level-order traversal',
            code: `from collections import deque

def level_order(root):
    if not root: return []
    result, queue = [], deque([root])
    while queue:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            if node.left:  queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result

# Tree height / depth
def height(root):
    if not root: return 0
    return 1 + max(height(root.left), height(root.right))

# Check if BST
def is_bst(root, lo=float('-inf'), hi=float('inf')):
    if not root: return True
    if not (lo < root.val < hi): return False
    return is_bst(root.left, lo, root.val) and is_bst(root.right, root.val, hi)`
          }
        ]
      },
      {
        id: 'graph-algorithms',
        title: 'Graph Representations & Traversal',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Graph representations and traversal templates for connected components, shortest paths, and cycle detection.',
        tags: ['graph', 'adjacency-list', 'DFS', 'BFS', 'connected-components'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Graph representations',
            code: `from collections import defaultdict, deque

# Adjacency list (most common in interviews)
graph = defaultdict(list)
# Undirected edge
graph[u].append(v)
graph[v].append(u)
# Directed edge
graph[u].append(v)

# From edge list
edges = [[0,1],[0,2],[1,3]]
n = 4
graph = defaultdict(list)
for u, v in edges:
    graph[u].append(v)
    graph[v].append(u)

# Adjacency matrix (for dense graphs)
adj = [[0] * n for _ in range(n)]
adj[u][v] = 1
adj[v][u] = 1  # undirected`
          },
          {
            type: 'code', language: 'python', label: 'DFS & BFS templates',
            code: `# DFS — recursive
def dfs(node, visited, graph):
    visited.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(neighbor, visited, graph)

# DFS — iterative
def dfs_iterative(start, graph):
    visited = set()
    stack = [start]
    while stack:
        node = stack.pop()
        if node in visited: continue
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                stack.append(neighbor)

# BFS — shortest path (unweighted)
def bfs_shortest(start, end, graph):
    visited = {start}
    queue = deque([(start, 0)])   # (node, distance)
    while queue:
        node, dist = queue.popleft()
        if node == end: return dist
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist + 1))
    return -1

# Count connected components
def count_components(n, edges):
    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)
    visited = set()
    count = 0
    for node in range(n):
        if node not in visited:
            dfs(node, visited, graph)
            count += 1
    return count`
          },
          {
            type: 'code', language: 'python', label: 'Grid DFS/BFS (matrix problems)',
            code: `# 4-directional movement
DIRS = [(0,1),(0,-1),(1,0),(-1,0)]
# 8-directional
DIRS8 = [(0,1),(0,-1),(1,0),(-1,0),(1,1),(1,-1),(-1,1),(-1,-1)]

def dfs_grid(grid, row, col, visited):
    rows, cols = len(grid), len(grid[0])
    if row < 0 or row >= rows or col < 0 or col >= cols:
        return
    if (row, col) in visited or grid[row][col] == 0:
        return
    visited.add((row, col))
    for dr, dc in DIRS:
        dfs_grid(grid, row+dr, col+dc, visited)

# BFS on grid — shortest path
def bfs_grid(grid, start, end):
    rows, cols = len(grid), len(grid[0])
    visited = {start}
    queue = deque([(start[0], start[1], 0)])
    while queue:
        r, c, dist = queue.popleft()
        if (r, c) == end: return dist
        for dr, dc in DIRS:
            nr, nc = r+dr, c+dc
            if 0 <= nr < rows and 0 <= nc < cols and (nr,nc) not in visited and grid[nr][nc] != 0:
                visited.add((nr, nc))
                queue.append((nr, nc, dist+1))
    return -1`
          }
        ]
      }
    ]
  },

  // ─── Chapter 8: Sorting & Binary Search ──────────────────────────────────────
  {
    id: 'sorting-search',
    title: 'Sorting & Binary Search',
    sections: [
      {
        id: 'sorting',
        title: 'Sorting Patterns',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Python sort, custom comparators, and when to use which sort strategy.',
        tags: ['sorting', 'timsort', 'custom-comparator', 'key'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Sorting essentials',
            code: `# Python's sort is Timsort — O(n log n) stable
arr.sort()                         # in-place
sorted_arr = sorted(arr)           # new list
arr.sort(reverse=True)
sorted_arr = sorted(arr, reverse=True)

# Custom key
intervals.sort(key=lambda x: x[0])       # sort by start
intervals.sort(key=lambda x: (x[0], -x[1]))  # sort by start asc, end desc
words.sort(key=lambda w: (len(w), w))    # len first, then alpha

# Sort with functools.cmp_to_key (when you need a comparator)
from functools import cmp_to_key

def compare(a, b):
    # Return negative if a should come first
    # Return positive if b should come first
    # Return 0 if equal
    if str(a) + str(b) > str(b) + str(a):
        return -1
    return 1

nums.sort(key=cmp_to_key(compare))  # largest number problem`
          }
        ]
      },
      {
        id: 'binary-search',
        title: 'Binary Search',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'The universal binary search template and bisect module — reduce O(n) searches to O(log n).',
        tags: ['binary-search', 'bisect', 'search-space', 'template'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Binary search templates',
            code: `# Template 1 — find exact target
def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2        # no overflow in Python
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

# Template 2 — find leftmost position (lower bound)
# First index where arr[mid] >= target
def lower_bound(arr, target):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo   # insertion point

# Template 3 — search on answer space (not array)
# "Find minimum X such that condition(X) is True"
def find_min_valid(lo, hi):
    while lo < hi:
        mid = (lo + hi) // 2
        if condition(mid):  # define your condition
            hi = mid        # mid might be the answer, search left
        else:
            lo = mid + 1
    return lo`
          },
          {
            type: 'code', language: 'python', label: 'bisect module',
            code: `import bisect

arr = [1, 3, 4, 4, 7, 9]

bisect.bisect_left(arr, 4)   # 2 — leftmost index to insert 4
bisect.bisect_right(arr, 4)  # 4 — rightmost index to insert 4
bisect.insort_left(arr, 5)   # inserts 5 in sorted order
bisect.insort_right(arr, 5)

# Count occurrences of x in sorted array
def count_in_sorted(arr, x):
    return bisect.bisect_right(arr, x) - bisect.bisect_left(arr, x)

# Find floor value (largest element <= x)
def floor_val(arr, x):
    i = bisect.bisect_right(arr, x) - 1
    return arr[i] if i >= 0 else None

# Find ceiling value (smallest element >= x)
def ceil_val(arr, x):
    i = bisect.bisect_left(arr, x)
    return arr[i] if i < len(arr) else None`
          },
          {
            type: 'callout', variant: 'must-know',
            text: 'Binary search on the answer space: if you can check "is X feasible?", binary search between lo and hi to find the minimum/maximum feasible X. Used in problems like "minimum capacity", "koko eating bananas", "split array largest sum".'
          }
        ]
      }
    ]
  },

  // ─── Chapter 9: Key Patterns ──────────────────────────────────────────────────
  {
    id: 'patterns',
    title: 'Key Interview Patterns',
    sections: [
      {
        id: 'two-pointers',
        title: 'Two Pointers',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Reduces O(n²) brute force to O(n) for sorted array problems and string manipulation.',
        tags: ['two-pointers', 'fast-slow', 'cycle-detection', 'palindrome'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Two pointer templates',
            code: `# Opposite ends — sorted array pair sum
def two_sum_sorted(arr, target):
    l, r = 0, len(arr) - 1
    while l < r:
        s = arr[l] + arr[r]
        if s == target:   return [l, r]
        elif s < target:  l += 1
        else:             r -= 1
    return []

# Same direction — remove duplicates
def remove_duplicates(arr):
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    return slow + 1

# Fast & slow pointers — cycle detection (Floyd's algorithm)
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Find middle of linked list
def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow   # slow is at middle`
          }
        ]
      },
      {
        id: 'sliding-window',
        title: 'Sliding Window',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Optimal O(n) solution for subarray/substring problems involving contiguous ranges.',
        tags: ['sliding-window', 'subarray', 'substring', 'max-min'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Fixed & variable window',
            code: `# Fixed window — max sum of subarray of size k
def max_sum_fixed(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

# Variable window — longest substring with at most k distinct chars
def longest_k_distinct(s, k):
    freq = defaultdict(int)
    l = res = 0
    for r in range(len(s)):
        freq[s[r]] += 1
        while len(freq) > k:
            freq[s[l]] -= 1
            if freq[s[l]] == 0:
                del freq[s[l]]
            l += 1
        res = max(res, r - l + 1)
    return res

# Variable window — minimum window substring
from collections import Counter
def min_window(s, t):
    need = Counter(t)
    missing = len(t)
    l = best_l = 0
    best_r = float('inf')
    for r, c in enumerate(s, 1):
        if need[c] > 0: missing -= 1
        need[c] -= 1
        if missing == 0:
            while need[s[l]] < 0:
                need[s[l]] += 1
                l += 1
            if r - l < best_r - best_l:
                best_l, best_r = l, r
            need[s[l]] += 1
            missing += 1
            l += 1
    return s[best_l:best_r] if best_r != float('inf') else ""`
          }
        ]
      },
      {
        id: 'prefix-sum',
        title: 'Prefix Sum & Difference Array',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Precompute prefix sums for O(1) range sum queries.',
        tags: ['prefix-sum', 'range-query', 'subarray-sum'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Prefix sum patterns',
            code: `# Build prefix sum
def build_prefix(arr):
    prefix = [0] * (len(arr) + 1)
    for i, val in enumerate(arr):
        prefix[i + 1] = prefix[i] + val
    return prefix

# Range sum query O(1) after O(n) build
def range_sum(prefix, l, r):     # inclusive [l, r]
    return prefix[r + 1] - prefix[l]

# Subarray sum equals k — use prefix sum + hashmap
from collections import defaultdict
def subarray_sum(nums, k):
    count = 0
    prefix = 0
    seen = defaultdict(int)
    seen[0] = 1         # empty subarray
    for num in nums:
        prefix += num
        count += seen[prefix - k]   # how many prefixes differ by k
        seen[prefix] += 1
    return count

# 2D prefix sum
def build_2d_prefix(matrix):
    rows, cols = len(matrix), len(matrix[0])
    prefix = [[0] * (cols + 1) for _ in range(rows + 1)]
    for r in range(1, rows + 1):
        for c in range(1, cols + 1):
            prefix[r][c] = (matrix[r-1][c-1]
                + prefix[r-1][c] + prefix[r][c-1]
                - prefix[r-1][c-1])
    return prefix`
          }
        ]
      },
      {
        id: 'monotonic-stack',
        title: 'Monotonic Stack',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'Find next/previous greater or smaller element in O(n). Used in histogram, temperature, and stock problems.',
        tags: ['monotonic-stack', 'next-greater', 'histogram', 'stock'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Next greater element',
            code: `# Next Greater Element — O(n)
def next_greater(arr):
    n = len(arr)
    result = [-1] * n
    stack = []   # stores indices, decreasing values from bottom to top
    for i in range(n):
        while stack and arr[i] > arr[stack[-1]]:
            idx = stack.pop()
            result[idx] = arr[i]
        stack.append(i)
    return result

# Previous Smaller Element
def prev_smaller(arr):
    result = [-1] * len(arr)
    stack = []
    for i in range(len(arr)):
        while stack and arr[stack[-1]] >= arr[i]:
            stack.pop()
        result[i] = arr[stack[-1]] if stack else -1
        stack.append(i)
    return result

# Largest rectangle in histogram — classic monotonic stack
def largest_rect(heights):
    stack = []
    max_area = 0
    heights.append(0)   # sentinel
    for i, h in enumerate(heights):
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area`
          }
        ]
      }
    ]
  },

  // ─── Chapter 10: Dynamic Programming ─────────────────────────────────────────
  {
    id: 'dp',
    title: 'Dynamic Programming',
    sections: [
      {
        id: 'dp-basics',
        title: 'Memoization vs Tabulation',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'Two approaches to DP — top-down (memoization) and bottom-up (tabulation). Know when to use each.',
        tags: ['dp', 'memoization', 'tabulation', 'top-down', 'bottom-up'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Top-down (memoization) — fibonacci',
            code: `from functools import lru_cache

# Top-down: write the recurrence naturally, add cache
@lru_cache(maxsize=None)
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

# Equivalent with manual memo dict
def fib_memo(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]`
          },
          {
            type: 'code', language: 'python', label: 'Bottom-up (tabulation) — fibonacci',
            code: `# Bottom-up: build from base cases upward
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Space-optimized O(1) space
def fib_opt(n):
    if n <= 1: return n
    a, b = 0, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return b`
          },
          {
            type: 'callout', variant: 'tip',
            text: 'Use top-down (lru_cache) when you only visit a fraction of states (sparse DP). Use bottom-up when you always fill the full table or need strict O(1) space optimization.'
          }
        ]
      },
      {
        id: 'dp-patterns',
        title: 'Common DP Patterns',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'Knapsack, LCS, LIS, coin change, and grid DP — the patterns that cover 80% of DP interview problems.',
        tags: ['knapsack', 'LCS', 'LIS', 'coin-change', 'grid-dp'],
        blocks: [
          {
            type: 'code', language: 'python', label: '0/1 Knapsack',
            code: `# 0/1 Knapsack — O(n * W)
def knapsack(weights, values, W):
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(W + 1):
            dp[i][w] = dp[i-1][w]   # don't take item i
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1])
    return dp[n][W]

# Space-optimized 1D (iterate w in reverse!)
def knapsack_1d(weights, values, W):
    dp = [0] * (W + 1)
    for i in range(len(weights)):
        for w in range(W, weights[i] - 1, -1):   # REVERSE order
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    return dp[W]`
          },
          {
            type: 'code', language: 'python', label: 'Coin Change, LCS, LIS',
            code: `# Coin Change — fewest coins (unbounded knapsack)
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for a in range(coin, amount + 1):   # forward (unbounded)
            dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

# LCS — Longest Common Subsequence
def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

# LIS — Longest Increasing Subsequence O(n log n)
import bisect
def lis(nums):
    tails = []
    for x in nums:
        pos = bisect.bisect_left(tails, x)
        if pos == len(tails):
            tails.append(x)
        else:
            tails[pos] = x
    return len(tails)`
          }
        ]
      }
    ]
  },

  // ─── Chapter 11: Advanced Graph Algorithms ────────────────────────────────────
  {
    id: 'advanced-graphs',
    title: 'Advanced Graph Algorithms',
    sections: [
      {
        id: 'union-find',
        title: 'Union Find (Disjoint Set Union)',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'Efficiently tracks connected components. Used in number of islands, redundant connection, and Kruskal\'s MST.',
        tags: ['union-find', 'DSU', 'connected-components', 'cycle-detection'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Union Find template',
            code: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]

    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return False     # already connected
        # Union by rank
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        self.components -= 1
        return True

    def connected(self, x, y):
        return self.find(x) == self.find(y)

# Usage
uf = UnionFind(5)
uf.union(0, 1)
uf.union(2, 3)
uf.connected(0, 1)      # True
uf.connected(0, 2)      # False
uf.components           # 3`
          }
        ]
      },
      {
        id: 'topological-sort',
        title: 'Topological Sort',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'Order tasks respecting dependencies. BFS (Kahn\'s) for cycle detection, DFS for ordering.',
        tags: ['topological-sort', 'DAG', 'Kahn', 'in-degree', 'course-schedule'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Kahn\'s algorithm (BFS)',
            code: `from collections import deque, defaultdict

def topo_sort(n, edges):
    graph = defaultdict(list)
    in_degree = [0] * n

    for u, v in edges:
        graph[u].append(v)
        in_degree[v] += 1

    queue = deque([i for i in range(n) if in_degree[i] == 0])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # If order has all n nodes, no cycle
    return order if len(order) == n else []

# Course schedule: can finish all courses?
def can_finish(num_courses, prerequisites):
    return len(topo_sort(num_courses, prerequisites)) == num_courses`
          }
        ]
      },
      {
        id: 'dijkstra',
        title: 'Dijkstra\'s Shortest Path',
        difficulty: 'Advanced',
        summary: 'Shortest path in weighted graph with non-negative edges. O((V + E) log V) with heap.',
        tags: ['dijkstra', 'shortest-path', 'weighted-graph', 'heap'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Dijkstra template',
            code: `import heapq
from collections import defaultdict

def dijkstra(n, edges, start):
    graph = defaultdict(list)
    for u, v, w in edges:
        graph[u].append((v, w))

    dist = [float('inf')] * n
    dist[start] = 0
    heap = [(0, start)]    # (distance, node)

    while heap:
        d, node = heapq.heappop(heap)
        if d > dist[node]: continue   # stale entry
        for neighbor, weight in graph[node]:
            new_dist = dist[node] + weight
            if new_dist < dist[neighbor]:
                dist[neighbor] = new_dist
                heapq.heappush(heap, (new_dist, neighbor))

    return dist   # dist[i] = shortest from start to i, inf if unreachable`
          }
        ]
      }
    ]
  },

  // ─── Chapter 12: Backtracking ─────────────────────────────────────────────────
  {
    id: 'backtracking',
    title: 'Backtracking & Recursion',
    sections: [
      {
        id: 'backtracking-template',
        title: 'Backtracking Template',
        difficulty: 'Advanced',
        mustKnow: true,
        summary: 'The universal backtracking pattern for permutations, combinations, subsets, and constraint satisfaction.',
        tags: ['backtracking', 'permutations', 'combinations', 'subsets', 'N-queens'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Universal backtracking template',
            code: `# Template
def backtrack(state, choices, result):
    if is_solution(state):
        result.append(state[:])   # make a COPY
        return
    for choice in choices:
        if is_valid(state, choice):
            state.append(choice)           # choose
            backtrack(state, choices, result)  # explore
            state.pop()                   # un-choose (backtrack)

# Subsets
def subsets(nums):
    result = []
    def bt(start, current):
        result.append(current[:])
        for i in range(start, len(nums)):
            current.append(nums[i])
            bt(i + 1, current)
            current.pop()
    bt(0, [])
    return result

# Permutations
def permutations(nums):
    result = []
    def bt(current, used):
        if len(current) == len(nums):
            result.append(current[:])
            return
        for i in range(len(nums)):
            if not used[i]:
                used[i] = True
                current.append(nums[i])
                bt(current, used)
                current.pop()
                used[i] = False
    bt([], [False] * len(nums))
    return result

# Combinations
def combinations(n, k):
    result = []
    def bt(start, current):
        if len(current) == k:
            result.append(current[:])
            return
        for i in range(start, n + 1):
            current.append(i)
            bt(i + 1, current)
            current.pop()
    bt(1, [])
    return result`
          },
          {
            type: 'callout', variant: 'must-know',
            text: 'Always append a COPY of state (current[:] or list(current)) to result, not a reference. Otherwise all result entries will reflect the final (empty) state after backtracking completes.'
          }
        ]
      },
      {
        id: 'trie',
        title: 'Trie (Prefix Tree)',
        difficulty: 'Advanced',
        summary: 'Efficient prefix search and word dictionary. Used in autocomplete, word search, and IP routing.',
        tags: ['trie', 'prefix-tree', 'word-search', 'autocomplete'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Trie implementation',
            code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end = True

    def search(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                return False
            node = node.children[c]
        return node.is_end

    def starts_with(self, prefix):
        node = self.root
        for c in prefix:
            if c not in node.children:
                return False
            node = node.children[c]
        return True`
          }
        ]
      }
    ]
  },

  // ─── Chapter 13: Python Libraries ─────────────────────────────────────────────
  {
    id: 'libraries',
    title: 'Python Libraries & Advanced Builtins',
    sections: [
      {
        id: 'collections',
        title: 'collections module',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Counter, defaultdict, deque, OrderedDict, namedtuple — save time in every interview.',
        tags: ['collections', 'Counter', 'defaultdict', 'deque', 'OrderedDict'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'collections cheatsheet',
            code: `from collections import (
    Counter, defaultdict, deque,
    OrderedDict, namedtuple, ChainMap
)

# Counter
c = Counter([1,1,2,3,3,3])      # Counter({3:3, 1:2, 2:1})
c.most_common(2)                 # [(3, 3), (1, 2)]
c.update([3, 4])                 # add more counts
list(c.elements())               # [1, 1, 2, 3, 3, 3, 3, 4]
sum(c.values())                  # total count

# defaultdict
dd = defaultdict(list)
dd['key'].append(1)              # no KeyError

dd = defaultdict(lambda: defaultdict(int))  # nested defaultdict

# deque
d = deque([1,2,3], maxlen=5)    # bounded deque
d.rotate(1)                     # [3, 1, 2]
d.rotate(-1)                    # [1, 2, 3]

# OrderedDict — remembers insertion order (less needed in Python 3.7+)
od = OrderedDict()
od.move_to_end('key')           # move to end
od.move_to_end('key', last=False)  # move to front
od.popitem(last=True)           # LIFO
od.popitem(last=False)          # FIFO`
          }
        ]
      },
      {
        id: 'itertools-functools',
        title: 'itertools & functools',
        difficulty: 'Advanced',
        summary: 'Power tools for combinatorics, lazy iteration, and functional programming.',
        tags: ['itertools', 'functools', 'combinations', 'product', 'accumulate'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'itertools for interviews',
            code: `import itertools

# Combinatorics
list(itertools.permutations([1,2,3]))           # all permutations
list(itertools.permutations([1,2,3], 2))        # r-length permutations
list(itertools.combinations([1,2,3], 2))        # [(1,2),(1,3),(2,3)]
list(itertools.combinations_with_replacement("AB", 2))  # [('A','A'),('A','B'),('B','B')]
list(itertools.product([0,1], repeat=3))        # all 3-bit binary strings

# Useful utilities
list(itertools.accumulate([1,2,3,4]))            # [1, 3, 6, 10] — prefix sums
list(itertools.accumulate([1,2,3,4], max))       # [1, 2, 3, 4] — running max
list(itertools.chain([1,2],[3,4],[5]))           # [1,2,3,4,5] — flatten
list(itertools.groupby("AAABBBCC"))              # group consecutive
list(itertools.islice(range(100), 10, 20))      # lazy slice

# functools
from functools import lru_cache, reduce, partial, cached_property

reduce(lambda a, b: a + b, [1,2,3,4])     # 10
double = partial(lambda x, y: x * y, 2)   # partial application
double(5)  # 10`
          }
        ]
      }
    ]
  },

  // ─── Chapter 14: Interview Tips & Complexity ──────────────────────────────────
  {
    id: 'interview-tips',
    title: 'Complexity, Tips & Pitfalls',
    sections: [
      {
        id: 'complexity',
        title: 'Time & Space Complexity Reference',
        difficulty: 'Fundamental',
        mustKnow: true,
        summary: 'Big O for all common data structures and operations. Know these before your interview.',
        tags: ['big-o', 'time-complexity', 'space-complexity'],
        blocks: [
          {
            type: 'list',
            items: [
              'Array access/update: O(1)',
              'Array search (unsorted): O(n)',
              'Array insert/delete at end: O(1) amortized',
              'Array insert/delete at middle: O(n)',
              'Hash map get/set/delete: O(1) average, O(n) worst',
              'Hash set add/contains/remove: O(1) average',
              'Stack push/pop/peek: O(1)',
              'Queue enqueue/dequeue (deque): O(1)',
              'Heap push/pop: O(log n)',
              'Heap peek (min/max): O(1)',
              'Binary search: O(log n)',
              'Sorting (Timsort): O(n log n)',
              'DFS/BFS: O(V + E)',
              'Union Find (with path compression): O(α(n)) ≈ O(1)',
              'Trie insert/search: O(L) where L = word length'
            ]
          },
          {
            type: 'code', language: 'text', label: 'Complexity quick guide',
            code: `Input size → Expected time complexity
n ≤ 10        → O(n!) — backtracking, permutations
n ≤ 20        → O(2^n) — bitmask DP, subsets
n ≤ 100       → O(n³) — Floyd-Warshall, 3D DP
n ≤ 1,000     → O(n²) — 2D DP, nested loops
n ≤ 100,000   → O(n log n) — sorting, heap, binary search
n ≤ 1,000,000 → O(n) — single pass, two pointers, sliding window
n ≤ 10^9      → O(log n) or O(1) — binary search on value`
          }
        ]
      },
      {
        id: 'pitfalls',
        title: 'Python Pitfalls & Interview Mistakes',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'Common errors that waste time in interviews. Know these before you sit down.',
        tags: ['pitfalls', 'bugs', 'gotchas', 'mutable-default'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Common pitfalls',
            code: `# 1. Mutable default argument
def bad(arr=[]):      # arr is shared across all calls!
    arr.append(1)
    return arr
def good(arr=None):
    if arr is None: arr = []
    arr.append(1)
    return arr

# 2. Shared list reference in 2D grid
grid = [[0] * 3] * 3      # WRONG — all rows are the same list
grid = [[0] * 3 for _ in range(3)]   # CORRECT

# 3. Modifying list while iterating
for x in arr:       # WRONG
    arr.remove(x)
for x in arr[:]:    # CORRECT — iterate over copy
    arr.remove(x)

# 4. Integer division
5 / 2    # 2.5  — float division
5 // 2   # 2    — floor division

# 5. is vs ==
a = [1, 2]
b = [1, 2]
a == b   # True  — same value
a is b   # False — different objects
# Use == for value comparison, 'is' only for None/True/False

# 6. Negative modulo
-7 % 3   # 2 in Python (not -1 like C/Java)

# 7. Deep vs shallow copy
import copy
shallow = arr.copy()         # nested lists still shared
deep = copy.deepcopy(arr)    # fully independent copy

# 8. lru_cache with mutable args — will raise TypeError
# Convert list to tuple before passing to cached function
@lru_cache(maxsize=None)
def dp(i, state):   # state must be a tuple, not list
    ...`
          },
          {
            type: 'callout', variant: 'warning',
            text: 'In LeetCode class-based problems, lru_cache decorated methods persist state between test cases. Call .cache_clear() in __init__ or use a dict-based memo you clear manually.'
          }
        ]
      },
      {
        id: 'shortcuts',
        title: 'Python Interview Shortcuts',
        difficulty: 'Intermediate',
        mustKnow: true,
        summary: 'One-liners and Pythonic patterns that make your solutions cleaner and faster to write.',
        tags: ['shortcuts', 'one-liners', 'pythonic', 'tricks'],
        blocks: [
          {
            type: 'code', language: 'python', label: 'Useful one-liners',
            code: `# Flatten 2D list
flat = [x for row in matrix for x in row]
flat = sum(matrix, [])             # also works

# Transpose matrix
transposed = list(zip(*matrix))
transposed = [list(row) for row in zip(*matrix)]

# Count elements
from collections import Counter
most_common = Counter(arr).most_common(1)[0][0]

# Check if two strings are anagrams
sorted(s1) == sorted(s2)
Counter(s1) == Counter(s2)

# Find index of max/min
max_idx = arr.index(max(arr))
min_idx = arr.index(min(arr))

# All / any
all(x > 0 for x in arr)
any(x < 0 for x in arr)

# Zip to dict
keys = ['a', 'b', 'c']
vals = [1, 2, 3]
d = dict(zip(keys, vals))

# Chunk list into groups of k
chunks = [arr[i:i+k] for i in range(0, len(arr), k)]

# Rolling window (manual)
for i in range(len(arr) - k + 1):
    window = arr[i:i+k]

# Repeat a list
[0] * n                     # [0, 0, ..., 0] — n zeros
[[]] * n                    # WRONG — shared refs
[[] for _ in range(n)]      # CORRECT

# Max/min with default
max(arr, default=0)
min(arr, default=float('inf'))

# Swap two variables
a, b = b, a

# In-place reverse
arr.reverse()
arr[:] = arr[::-1]`
          }
        ]
      }
    ]
  }
]
