<script>
  let rooms = [ {
    id: 1,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  },{
    id: 2,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  },{
    id: 3,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  },{
    id: 4,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  },
  {
    id: 5,
    name: 'BLUE NOTE Room - First floor',
    description:"The Blue Note weaves together midnight blue china glazes and intricate flower patterns to inspire a soft and calming atmosphere, offering an effortless view of the city from a roomy and oriental-inspired space.",
    image: 'https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425709846175-72B0FZBYLL0NWJXCU358/image-asset.jpeg',
    price: 1800000,
    unit: 'per night',
    roomNumber: '01 Double Bed, with wooden bathtub',
    utilities: ['Stereo speakers','Breakfast included']
  }]
</script>
<div class="tw-w-full tw-h-96">
  <img class="tw-w-full tw-h-full tw-object-cover" alt="room" src="https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1425718953870-KRWW1E2ZRV37M4LV06ME/Ph%C3%B2ng+4+-+Lotus+Green+%281%29.JPG?format=2500w">
</div>
<div class="tw-container tw-mx-auto tw-py-10">
  <div class="tw-w-full tw-flex tw-space-x-4">
    <div class="tw-w-5/12">
      <h2 class="tw-text-xl">Ở trong một trong những khách sạn hàng đầu!</h2>
      <div class="tw-mt-6">
        <p>Với tổng số 369 phòng gồm số phòng thuộc khách sạn ban đầu và khối condotel mới, khách du lịch tại Lan Rừng Phước Hải sẽ có được rất nhiều lựa chọn đa dạng. Gồm 19 loại phòng rộng rãi như phòng đôi / phòng đôi, phòng căn hộ, phòng gia đình và biệt thự bên bờ biển, tất cả đều lấy cảm hứng trang nhã từ thời kỳ Phục hưng Châu Âu.</p>
        <p>Tất cả các phòng đều được trang bị máy lạnh và có ban công riêng với tầm nhìn bao quát ra biển hoặc vườn và núi, TV LCD màn hình lớn, két an toàn, Wi-FI miễn phí và tất cả các tiện nghi cần thiết cho một kỳ nghỉ thoải mái.</p>
        <p>Bốn khối condotel khác đang được xây dựng, dự kiến khai trương vào đầu năm 2020.</p>
      </div>
    </div>
    <div class="tw-w-7/12">
      <div class="tw-w-full tw-pb-75-percent tw-relative">
        <img src="https://images.squarespace-cdn.com/content/v1/53437d27e4b0d420162237b6/1424162888241-WIRM5TPCOAGTIRB7ANQC/CAMI0086.jpg" class="tw-absolute tw-w-full tw-h-full tw-left-0 tw-top-0 tw-object-cover" alt="room">
      </div>
    </div>
  </div>
  <div class="tw-mt-4 tw-grid tw-grid-cols-3 tw-gap-4">
    {#each rooms as room (room.id) }
    <div class="tw-w-full tw-space-y-4">
      <div class="tw-w-full tw-relative tw-pb-75-percent">
        <img src={room.image} alt={room.name} class="tw-absolute tw-w-full tw-h-full tw-object-cover tw-left-0 tw-top-0">
      </div>
      <div class="tw-space-y-2">
        <h3 class="tw-text-xl tw-text-center">
          {room.name}
        </h3>
        <div class="tw-mt-2 tw-text-center">
          {room.description}
        </div>
      </div>
    </div>
      
    {/each}
  </div>
</div>