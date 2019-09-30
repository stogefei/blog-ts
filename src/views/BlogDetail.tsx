import * as React from 'react';
import Header from '../components/Header';
import BackgroundHeader from '../components/BackgroundHeader';
import Footer from '../components/BoxFooter';

class BlogDetail extends React.Component{
    public render(){
        return (
            <div className="blog-detail">
                <Header/>
                <BackgroundHeader/>
                <div className="blog-container">
                    <div className="container">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum sapiente, quas nam est totam dignissimos officia a
                            eligendi neque molestias consequuntur voluptatibus iure tempora labore quo aliquam veritatis praesentium.
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default BlogDetail