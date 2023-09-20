# https://chat.openai.com/share/a4763b16-8bb3-4ca5-910b-d0e0957e302f

# Use an image with Wine pre-installed
FROM dperson/wine

# Set the working directory
WORKDIR /wine

# Copy your Windows executable into the container
COPY aplwin/aplw.exe /wine/
COPY aplwin/aplw.ini /wine/

# Run the executable using Wine
CMD wine aplw.exe
