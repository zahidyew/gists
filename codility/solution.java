import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
   // OddOccurrencesInArray 100% solution O(N)
    public int solution(int[] A) {
        // write your code in Java SE 8
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int ans = 0;

        for (int i = 0; i < A.length; i++) {
            if (map.get(A[i]) != null) {
                int c = map.get(A[i]);
                map.put(A[i], ++c);
            } else {
                map.put(A[i], 1);
            }
        }
        //System.out.println(map);

        for (int key : map.keySet()) {
            int val = map.get(key);
            if (val % 2 != 0) {
                ans = key;
            }
        }
        return ans;
    }

    // CyclicRotation 100% solution
    public int[] solution(int[] A, int K) {
        // write your code in Java SE 8
        int len = A.length;
        int[] arr = new int[len];

        for (int i = 0; i < len; i++) {
            int shift = K % len;
            int index;
            if (shift == 0) {
                return A;
            }
            if (i + shift > len - 1) {
                index = i + shift - len;
            } else {
                index = i + shift;
            }
            arr[index] = A[i];
        }
        return arr;
    }

    // PermMissingElem
   public int solution(int[] A) {
        // write your code in Java SE 8
        int n = A.length;
        int sum = 0;

        for (int i = 0; i < n; i++) {
            sum = sum ^ A[i] ^ (i + 1);
            //System.out.println(sum);
        }
        return sum ^ (n + 1);
    }

    // TapeEquilibrium 100% solution
    public int solution(int[] A) {
        int sum = 0;
        int len = A.length;
        int min = Integer.MAX_VALUE;
        int localSum = 0;

        // finding the sum of all numbers
        for (int i = 0; i < len; i++) {
            sum = sum + A[i];
        }

        // finding the diff between 2 parts
        for (int i = 0; i < len - 1; i++) {
            localSum = localSum + A[i];
            sum = sum - A[i];
            int diff = Math.abs(localSum - sum);
            
            if (diff < min) {
                min = diff;
            }
            //System.out.println("localsum - sum: " + localSum + " - " + sum + " = " + diff);
        }
        return min;
    } 

    // FrogRiverOne
    public int solution(int X, int[] A) {
        int len = A.length;
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < len; i++) {
            if (A[i] <= X) {
                // if number is in the range [1 - X] & hasnt been added to the list,
                // add it to the list.
                if (map.get(A[i]) == null) {
                    map.put(A[i], 1);
                }
            }
            //System.out.println(map);
            // if list size is same as X, then we can conclude that 
            // leaves have appear in every position across the river. 
            if (map.size() == X) {
                return i;
            } 
        }
        return -1;
    }

    // MaxCounters
    public int[] solution(int N, int[] A) {
        // write your code in Java SE 8
        int len = A.length;
        int[] counter = new int[N];
        int max = 0;        // holds the max counter command
        int currentMax = 0; // the current max counter 
        Arrays.fill(counter, 0); 

        for (int i = 0; i < len; i++) {
            // increase(X) command
            if (A[i] > 0 && A[i] < N+1) {
                // if the max counter command is already called
                if (max > counter[A[i] - 1]) {
                    counter[A[i] -1] = max;
                }
                counter[A[i] - 1]++;

                // check if need to replace the currentMax value
                if (counter[A[i] - 1] > currentMax) {
                    currentMax =  counter[A[i] - 1];
                }
            } 
            // max counter command
            else {
                max = currentMax; // saves the max value, write after this loop is over
            }
            //System.out.println(Arrays.toString(counter));
        }

        // for the counters that hasnt been set to the max value
        for (int i = 0; i < N; i++) {
            if (counter[i] < max) {
                counter[i] = max;
            }
        }
        return counter;
    }

    // MaxProductOfThree
    public int solution(int[] A) {
        Arrays.sort(A);
        
        int len = A.length;
        // two smallest negative integer can make a positive number
        int max = Math.max(A[0] * A[1] * A[len-1], A[len-1] * A[len-2] * A[len-3]);
        return max;
    }

    // Brackets
    public int solution(String S) {
        // write your code in Java SE 8
        int len = S.length();
        Stack<Character> stack = new Stack<>();
        HashMap<Character, Character> map = new HashMap<>();

        map.put(']','[');
        map.put('}','{');
        map.put(')','(');

        if (len % 2 == 1) return 0;

        for (char c : S.toCharArray()) {
            if (c == '[' || c == '{' || c == '(') {
                stack.push(c);
            } else {
                if (stack.empty()) {
                    return 0;
                } else if (map.get(c) == stack.peek()) {
                    stack.pop();
                } else {
                    return 0;
                }
            }
        }
        if (stack.empty()) {
            return 1;
        } else {
            return 0;
        }
    }
}