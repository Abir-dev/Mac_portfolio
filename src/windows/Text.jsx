import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import React from 'react';

const Text = () => {
  const data = useWindowStore((state) => state.windows.txtfile.data);

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-8 bg-white overflow-y-auto max-h-[70vh] space-y-5">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full max-h-52 object-cover rounded-lg"
          />
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold text-gray-900">{subtitle}</h3>
        )}

        {Array.isArray(description) &&
          description.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-gray-700">
              {paragraph}
            </p>
          ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;
