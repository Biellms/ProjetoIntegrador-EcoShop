import { Alert } from '@mui/material';
import React from 'react';
import './Home.css';

export function Home() {
    return (
        <main>
            <section className='main-section-1'>
                <div>
                    <h1>INFORMAÇÃO 1</h1>
                </div>
                <div>
                    <h1>INFORMAÇÃO 2</h1>
                </div>
            </section>
            <section className='main-section-2'>
                <div>
                    <h1>INFORMAÇÃO 3</h1>
                </div>
            </section>
        </main>
    );
}
