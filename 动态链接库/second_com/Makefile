CC = gcc
CFLAGS = -Wall -g
LIBPATH = -L./lib
LIB = -lstr

main: main.o
    $(CC) $(CFLAGS) -o $@ main.o $(LIBPATH) $(LIB)
    $(RM) *.o

.PHONY:clean
clean:
    -rm -f main
