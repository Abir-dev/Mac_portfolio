import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import React from 'react';

const Image = () => {
  const data = useWindowStore((state) => state.windows.imgfile.data);

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{name}</p>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <img src={imageUrl} alt={name} 
            className="w-full h-auto max-h-[70vh] object-contain rounded"
          />
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;
