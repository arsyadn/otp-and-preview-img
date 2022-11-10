import React, { useState } from "react";
import { Input } from "antd";

const Upload = () => {
  const [file, setFile] = useState(null);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setFile(reader.result);
      });
    }
  };

  return (
    <div className="pt-6 flex flex-col items-center">
      <p>TAKE FOTO</p>
      <p className="mt-10">
        Pastikan foto tidak buram dan KTP dapat terlihat jelas
      </p>
      <div className="mt-7 border-2 border-black p-3">
        <div className="w-[200px] h-[300px] border-2 border-black p-1">
          {file === null ? null : (
            <img src={file} alt="upload pic" className="w-full h-full" />
          )}
        </div>
      </div>
      <Input
        type="file"
        id="file"
        accept="image/*"
        onChange={(e) => onChangePicture(e)}
        className="hidden"
      />
      <label
        htmlFor="file"
        className="bg-black text-white text-xs px-6 py-1 mt-14 cursor-pointer"
      >
        Ambil Foto
      </label>
    </div>
  );
};

export default Upload;
