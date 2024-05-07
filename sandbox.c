#include <stdio.h>
int main(void)
{
	FILE *f = fopen("hi.txt", "r");
	if (f == NULL)
	{
		return 1;
	}
	printf("Success\n");
}
