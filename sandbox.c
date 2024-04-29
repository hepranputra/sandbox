#include <stdio.h>

int main(void)
{
    int size = 25;
    int sequence[size];
    sequence[0] = 1;
    printf("%i\n", sequence[0]);

    for (int i = 1; i < size; i++)
    {
        sequence[i] = sequence[i - 1] * 2;
        printf("%i\n", sequence[i]);
    }
}
