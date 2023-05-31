import React, { useEffect, useState } from "react";
import Container from "../shared/Container/Container";
import Card from "./Card";
import Loader from "../shared/Loader";
import { useSearchParams } from "react-router-dom";
import HeaderSection from "../HeaderSection/HeaderSection";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    setLoading(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((roomsData) => {
        if (category) {
          const filteredRooms = roomsData.filter(
            (room) => room.category === category
          );
          setRooms(filteredRooms);
        } else {
          setRooms(roomsData);
        }
        console.log(roomsData);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="mt-20">
          <div className="pt-20">
            <HeaderSection
              title="No rooms category in this category "
              subtitle="Please Select other Categories"
              center="true"
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
