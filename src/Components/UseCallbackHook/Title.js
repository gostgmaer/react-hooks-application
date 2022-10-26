import React from 'react'

function Title() {
    console.log(`Rendring Title Components`);
  return (
    <div>
        Use CallBack Hooks
    </div>
  )
}

 export default React.memo(Title)