import axios from "axios";
import { useState } from "react";
import { FaFileWord } from "react-icons/fa";

const Home = () => {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  // State to store the success message
  const [convert, setConvert] = useState("");
  // State to store the error message
  const [downloadError, setDownloadError] = useState("");

  // Function to handle file input change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setConvert(""); // Clear success message when a new file is selected
    setDownloadError(""); // Clear error message when a new file is selected
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setConvert("");
    if (!selectedFile) {
      setConvert("Please select a file");
      return;
    }

    // Create FormData object and append the selected file
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Send POST request to server with the file
      const response = await axios.post("http://localhost:3000/convertFile", formData, {
        responseType: "blob"
      });

      // Create a URL for the downloaded file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"); // Set the download attribute with the new file name
      document.body.appendChild(link);
      link.click(); // Simulate click to download the file
      document.body.removeChild(link);

      // Reset states after successful conversion
      setSelectedFile(null);
      setDownloadError("");
      setConvert("File converted successfully!");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        setDownloadError("Error converting file");
      } 
      setConvert("");
    }
  };

  return (
    <div className='max-w-screen-2xl container mx-auto px-6 md:px-40'>
      <div className='flex flex-col h-screen justify-center items-center'>
        <div className='border-2 border-dashed px-4 py-2 md:px-8 md:py-6 border-indigo-400 rounded-lg shadow-md'>
          <h1 className='text-3xl font-bold text-center mb-4'>Convert word to PDF online</h1>
          <p className='text-sm text-center mb-5'>Easily convert word format document to pdf format online without installing any app</p>

          <div className='flex flex-col items-center space-y-5'>
            <input
              type="file"
              accept='.doc, .docx'
              id='fileInput'
              name='fileInput'
              className='hidden'
              onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className='w-full flex items-center justify-center px-4 py-6 bg-grey-100 text-grey-700 rounded-lg shadow-lg cursor-pointer border-blue-300 hover:bg-blue-700 duration-300 hover:text-white'>
              <FaFileWord className="text-xl" />
              <span className='ml-2 text-xl'>{selectedFile ? selectedFile.name : "Select Word File"}</span>
            </label>
            <button
              disabled={!selectedFile}
              onClick={handleSubmit}
              className={`text-white bg-blue-500 hover:bg-blue-700 duration-300 font-bold px-4 py-2 rounded-lg ${!selectedFile ? "bg-gray-400 cursor-not-allowed" : ""}`}
            >
              Convert file
            </button>
            {convert && (
              <div className="text-green-500 text-center">{convert}</div>
            )}
            {downloadError && (
              <div className="text-red-500 text-center">{downloadError}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
