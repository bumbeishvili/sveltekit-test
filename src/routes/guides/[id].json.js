export async function get({ params }) {
    // connect to the database

    const guides = [
        { id: 1, title: 'some title', body: 'Some body' },
        { id: 2, title: 'some title 2', body: 'Some body' },
        { id: 3, title: 'some title 3', body: 'Some body' },
        { id: 4, title: 'some title 4', body: 'Some body' },
        { id: 5, title: 'some title 5', body: 'Some body' },
    ]

    const guide = guides.find(guide => guide.id === +params.id)

    if (guide) {
        return {
            status: 200,
            body: {
                guide
            }
        }
    }

    return {
        status: 404,
        body: {
            params
        }
    }

}