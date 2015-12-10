################################################################################
# Compiler settings
################################################################################
CXX=g++

#FILE = hui

#SOURCE_FILE += $(FILE).cpp

#OBJECT_FILE += $(FILE).o

#target := $(FILE)

##CFLAGS = -Wall -Wconversion -O3 `pkg-config --cflags opencv`

CFLAGS = -Wall

LIBS = `pkg-config --libs opencv`



target: *.o
	$(CXX) *.cpp $(CFLAGS) -o target $(LIBS)

clean:
	rm -rf *.o *.e target
