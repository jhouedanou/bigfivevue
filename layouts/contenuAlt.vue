<template>
	<div id="pagewrapper">
		<HeaderAlt />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>
<style>
/* Add your styles here */
#menulinks {
	margin: 0;
	padding: 0;
	list-style: none;

	li {
		margin: 0 0.5em;
		padding: 0.5em;

		a {
			font-family: "New Order";
			font-weight: 700;
		}
	}
}
</style>