import React from 'react';
import { FadeIn, Modal, Paper } from 'components';

interface NewsletterProps {
    handleClose: () => void;
    isOpen: boolean;
}

const Newsletter: React.FC<NewsletterProps> = ({ isOpen, handleClose }) => {
    return (
        <Modal isOpen={isOpen} handleClose={handleClose}>
            <Paper className="w-full max-w-3xl" rounded>
                <FadeIn>
                    <div>
                        <h1 className="text-center">
                            Subscribe to <br /> Tinkerhub Newsletter
                        </h1>
                        <iframe
                            src="https://tinkerhub.substack.com/embed"
                            scrolling="no"
                            className="w-full m-0"
                            title="TinkerHub Newsletter"
                        ></iframe>
                    </div>
                </FadeIn>
            </Paper>
        </Modal>
    );
};

export default Newsletter;
