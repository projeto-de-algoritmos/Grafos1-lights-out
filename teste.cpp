#include <bits/stdc++.h>

using namespace std;
using ii = pair<int, int>;

const int MAX { 70000 };

int moves[MAX], parent[MAX];
ii position[MAX];

int matrix[10][10];

int to_state(int N)
{
    int state = 0;

    for (int x = 1; x <= N; ++x)
        for (int y = 1; y <= N; ++y)
        {
            state <<= 1;
            state |= matrix[x][y];
        }

    bitset<9> teste(state);
    cout << teste << endl;

    return state;
}

void from_state(int N, int state)
{
    // cout << "Matrix From State" << endl;
    // for (int x = 1; x <= N; ++x){
    //     for (int y = 1; y <= N; ++y)
    //     {
    //         cout << matrix[x][y] << " ";
    //     }
    //     cout << "\n";}
    for (int x = N; x >= 1; --x)
        for (int y = N; y >= 1; --y)
        {
            matrix[x][y] = state & 1;
            state >>= 1;
        }
//     cout << "Matrix From State" << endl;
//     for (int x = 1; x <= N; ++x){
//         for (int y = 1; y <= N; ++y)
//         {
//             cout << matrix[x][y] << " ";
//         }
//         cout << "\n";}
}

void play(int x, int y)
{
    vector< pair<int, int> > dirs { ii(0, -1), ii(-1, 0), ii(0, 0), 
        ii(1, 0), ii(0, 1) };

    // cout << "x: " << x << " y: "<< y << endl;

    for (auto p : dirs)
        matrix[x + p.first][y + p.second] ^= 1;

    // cout << "Matrix Play" << endl;
    // for (int x = 1; x <= 3; ++x){
    //     for (int y = 1; y <= 3; ++y)
    //     {
    //         cout << matrix[x][y] << " ";
    //     }
    //     cout << "\n";}
}

int solve(int N, int s0)
{
    queue<int> states;
    states.push(s0);

    int goal = (1 << (N * N)) - 1;
    int state = -1;

    while (not states.empty())
    {
        state = states.front();
        states.pop();
        int m = moves[state];

        if (state == 0 or state == goal)
            break;

        from_state(N, state);

        for (int x = 1; x <= N; ++x){
        for (int y = 1; y <= N; ++y)
        {
            play(x, y);
            int s = to_state(N);

            if (moves[s] == -1)
            {
                moves[s] = m + 1;
                parent[s] = state;
                position[s] = ii(x, y);
                states.push(s);
            }

            play(x, y);
            // break;
        }
        // break;
        }
        // break;
    }

    return state;
}

void print_sequence(int s)
{
    if (s == parent[s])
        return;

    print_sequence(parent[s]);
    printf("%d %d\n", position[s].first, position[s].second);
}

int main()
{
    int N;
    scanf("%d", &N);

    for (int x = 0; x < MAX; ++x)
    {
        moves[x] = -1;
        parent[x] = x;
    }

    char line[10];

    for (int x = 1; x <= N; ++x)        
    {
        scanf("%s", line);

        for (int y = 1; y <= N; ++y)        
            matrix[x][y] = (line[y - 1] == 'Y' ? 0 : 1);
    }
        
    auto s = to_state(N);
    cout << "S: " << s << endl;
    
    moves[s] = 0;

    auto ans = solve(N, s);
    cout << "ans " << ans << endl;

    // return 0;
    auto goal = (1 << (N * N)) - 1;
    cout << "Goal: " << goal << endl;

    if (ans != 0 and ans != goal)
    {
        printf("-1\n");
        return 0;
    }

    printf("%d\n", moves[ans]);

    if (moves[ans])
        print_sequence(ans);

    return 0;
}