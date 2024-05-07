#include <stdint.h>
#include <stdio.h>

int main(int argc, char *argv[])
{
	if (argc != 2)
	{
		printf("Need a filename\n");
		return 1;
	}

    // TODO: Check first 4 bytes in given file
    char *filename = argv[1];
    FILE *f = fopen(filename, "r");

    if (f == NULL)
    {
    	printf("File not found\n");
    	return 2;
    }

    uint8_t buffer[4];
    // int buffer[4];

    int blocks_read = fread(buffer, 1, 4, f);

    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", buffer[i]);
    }

    printf("Blocks read: %i\n", blocks_read);
    fclose(f);
}
