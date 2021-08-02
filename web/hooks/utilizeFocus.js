import React, { Component, useState, useRef,useEffect } from 'react';

export function utilizeFocus () {
  const ref = React.createRef()
  const setFocus = () => {
    ref.current && ref.current.focus()
  }

  return { setFocus, ref }
}
