import React from 'react'
import Client from '../../components/client';
import Editor from '../../components/editor';
export default function EditorPage() {
  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='heading'>
            <h2>Code-Sync</h2>
          </div>
          <h3>Connected</h3>
          <div className='clientsList'>
            <Client/>
          </div>
        </div>
        <button className='btn copyBtn'>Copy Room Id</button>
        <button className='btn leaveBtn'>Leave</button>        
      </div>
      <div className='editorWrap'>
        <Editor/>
      </div>
    </div>
  )
}
