"use client";
import { ActionPill } from "@/components/ActionPill";
import Checkbox from "@/components/Checkbox";
import { Icon } from "@/components/Icon";
import { Pagination } from "@/components/Pagination";
import Search from "@/components/Search";
import { SponsorCard } from "@/components/SponsorCard";
import { events, projectCategories } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import styles from "./page.module.css";

export default function Sponsor() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = events.length;
  const { control, setValue } = useForm({
    defaultValues: {
      categories: [] as string[],
    },
  });
  const { control: featureControl } = useForm();
  const { control: searchControl } = useForm<any>({
    defaultValues: {
      search: "",
    },
  });

  const selectedCategories = useWatch({
    control,
    name: "categories",
  });

  const allCategoryValues = projectCategories.map((category) => category.value);

  const allSelected = selectedCategories.length === allCategoryValues.length;

  const partiallySelected =
    selectedCategories.length > 0 &&
    selectedCategories.length < allCategoryValues.length;

  return (
    <div className={styles.sponsor}>
      <header className={styles.sponsor_header}>
        <Icon icon="logo4" />
      </header>
      <div className={styles.sponsor_dashboard}>
        <div className={styles.sponsor_dashboard_main_image}>
          <Image
            sizes="100vw"
            priority
            alt="background"
            fill
            unoptimized
            src="/assets/images/background.jpg"
          />
          <div className={styles.sponsor_dashboard_main_title_container}>
            <h1 className={styles.sponsor_dashboard_main_title}>
              Good morning
            </h1>
            <p className={styles.sponsor_dashboard_main_description}>
              Hello dear. Welcome to Bethseda Sponsor App!
            </p>
          </div>
        </div>
        <div className={styles.sponsor_dashboard_main_container}>
          <div className={styles.sponsor_filters_container}>
            <p className={styles.sponsor_filters_heading}>Filter Projects</p>
            <div className={styles.sponsor_filters}>
              <div className={styles.sponsor_filters_accordion}>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={styles.sponsor_filters_accordion_header}
                >
                  <Icon icon={isExpanded ? "chevronUp" : "chevronDown"} />
                  <div
                    className={
                      styles.sponsor_filters_accordion_header_container
                    }
                  >
                    <Checkbox
                      label="Projects"
                      id="projects"
                      name="categories"
                      control={control}
                      checked={allSelected}
                      indeterminate={partiallySelected}
                      onCheckedChange={(checked) => {
                        setValue(
                          "categories",
                          checked ? allCategoryValues : [],
                          {
                            shouldDirty: true,
                          },
                        );
                      }}
                      style={{
                        color: "#000",
                        fontFamily: "Instrument Sans",
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: "28px",
                        textAlign: "left",
                      }}
                    />
                  </div>
                </button>
              </div>
              {isExpanded &&
                projectCategories.map((category, index) => {
                  return (
                    <div
                      key={`category_${index + 1}`}
                      className={styles.sponsor_filter}
                    >
                      <Checkbox
                        label={category?.label}
                        id={category.value}
                        name="categories"
                        value={category.value}
                        control={control}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={styles.sponsor_dashboard_main}>
            <div className={styles.sponsor_dashboard_main_header}>
              <div className={styles.sponsor_dashboard_main_heading_container}>
                <h2 className={styles.sponsor_dashboard_main_heading}>
                  Find a sponsored project
                </h2>
                <p
                  className={styles.sponsor_dashboard_main_heading_description}
                >
                  Help us bring our projects to life while making impact to the
                  community at large.{" "}
                </p>
              </div>
              <Search
                placeholder="Search By Project Name"
                name="search"
                control={searchControl}
              />
              <div className={styles.sponsor_dashboard_main_feature_container}>
                <p className={styles.sponsor_dashboard_main_feature}>
                  Featured:
                </p>
                {projectCategories?.slice(0, 3)?.map((category, index) => {
                  return (
                    <ActionPill
                      name={"categories"}
                      label={category?.label}
                      value={category?.value}
                      key={`featured_${index + 1}`}
                      control={featureControl}
                      isFeatured={true}
                    />
                  );
                })}
              </div>
            </div>

            <div className={styles.sponsor_dashboard_main_grid}>
              {events?.map((event, index) => {
                return <SponsorCard key={`event_${index + 1}`} event={event} />;
              })}
            </div>
            <Pagination
              currentPage={currentPage}
              totalCount={totalPages}
              siblingCount={1}
              boundaryCount={1}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
