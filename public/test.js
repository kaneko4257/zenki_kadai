async function uploadImages(files) {
  const formData = new FormData();
  const options = {
    maxSizeMB: 5,
    maxWidthOrHeight: 1600
  };

  for (const file of files) {
      const compressedFile = await imageCompression(file, options);
      formData.append("images", compressedFile);
  }

  try {
    const response = await fetch("/image/upload", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Failed to upload images: ${response.statusText}`);
    }

    console.log("Upload successful");
  } catch (error) {
    console.error(error);
  }
}
