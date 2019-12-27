import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

class Details extends React.Component {
    state = { loading: true };

    componentDidMount() {
        pet.animal(this.props.id)
            .then(({ animal }) => {
                this.setState({
                    url: animal.url,
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, ${
                        animal.contact.address.state
                        }`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false
                });
            })
            .catch(err => this.setState({ error: err }));
    }


    render() {
        if (this.state.loading) {
            return <h1> Loading.... </h1>
        };
        const { animal, breed, location, description, media } = this.state;
        console.log(media)

        return (
            <div className="details">
                <Carousel media={media} />
                <h1>{name}</h1>
                <h2> {`${animal} - ${breed} - ${location} `}</h2>
                <button>  Adopt - {name}</button>
                <p>{description}</p>
            </div>
        );
    };
};
export default Details;