import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => { // O metodo openModal será visivel para o component pai.
    return {
      openModal
    }
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if(!visible) {
    return null;
  }

  return (
    <div>
      Modal aberto

      <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  )
}

export default forwardRef(Modal);