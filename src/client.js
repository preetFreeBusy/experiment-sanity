//This is the file that is used to talk to Sanity
import sanityClient from '@sanity/client';

export default sanityClient({
    projectId:"kfeps61t",
    dataset:"production"
})