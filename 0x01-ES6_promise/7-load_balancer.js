export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload])
      .then((value) => value) // Directly return the resolved value
      .catch((error) => {
        // Re-throw to ensure the error can be handled by the caller
        console.error('Error:', error);
        throw error;
      });
  }