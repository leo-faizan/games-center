import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'



export default function List() {
    return (
        <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 '>
            <Card className='rounded-xl hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-gray-700 duration-300'>
                <CardHeader>
                    <CardTitle className='mb-3'>Cyberpunk 2077</CardTitle>
                    <img className='rounded-xl' src="https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg" alt="" />
                    <CardDescription className='mt-3' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis deserunt consectetur rem veniam laboriosam dolores cum itaque, nemo quis?</CardDescription>
                </CardHeader>
                <CardFooter className='flex justify-between'>
                    <Button variant="outline" className='rounded-xl hover:bg-white hover:text-black'>
                        <Heart className='h-4 w-4' />
                    </Button>
                    <Button className='rounded-xl text-black bg-white hover:bg-black hover: hover:text-white '>Add To Cart</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
