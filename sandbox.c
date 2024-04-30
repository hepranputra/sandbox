#include <stdbool.h>
#include <stdio.h>
#include <strings.h>

int main(int argc, char **argv)
{
	for (int i = 0; i < argc+1; i++)
	{
		printf("Argumen no. %i %s\n", i + 1, argv[i]);
	}
}
