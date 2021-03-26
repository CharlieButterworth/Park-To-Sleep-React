import React, { useState, useContext, useEffect } from "react"
import {RentalPostContext} from "./RentalPostProvider"
import {RentalPost} from "./RentalPost"


export const RentalSpotsAvailable = ({props}) => {
    const {posts, getRentalPosts} = useContext(RentalPostContext)

    useEffect(() => {
        getRentalPosts()
    }, [])


    return (
        <>
        
        {
            posts.map(p => {
                return <RentalPost key={p.id} rentalpost={p} props={props}/>
            })
        }
        </>
    )




}