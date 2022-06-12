import React from 'react'
import Cakes from '../Cakes.json'
export default function Cake() {
  return (
    <div className='conatiner m-5'>
      <div className='row p-5'>
        <h1 className='mt-5 text-center'>All Cake Flawor</h1><hr />
        {Cakes.map((result) =>
          <div className='col-md-4'>
            <div class="card" >
              <img src={result.img} class="card-img-top" alt={result.name} />
              <div class="card-body">
                <h5 class="card-title"> {result.flawor}</h5>
                <h5 className='text-muted'>{result.price}</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
